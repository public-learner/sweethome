import ErrorPage from "next/error"
import dynamic from "next/dynamic"
import Head from "next/head"
import PostBody from "@/components/post-body"
import PostHeader from "@/components/post-header"
import Layout from "@/components/layout"
import PostType from "../../types/post"
import ScreenshotLink from "@/components/screenshot-link"
import CodeEditor from "@/components/mdx/code-editor"
import { Giscus, Theme } from "@giscus/react"
import useStore from "../../lib/zustand"

import fs from "fs/promises"
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
const rehypePrism = require("@mapbox/rehype-prism")

import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils"

const components = {
  CodeEditor: CodeEditor,
  ScreenshotLink: ScreenshotLink,
  PostBody: PostBody,
}

const ProgressBar = dynamic(() => import("../../components/read-progress"), {
  ssr: false,
})

type Params = {
  params: {
    slug: string
  }
}

type Props = {
  source: any
  frontMatter: PostType
  slug: string
}

const Post = ({ source, frontMatter, slug }: Props) => {
  // @ts-ignore
  const theme = useStore((state) => state.theme)
  if (!frontMatter?.title) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <ProgressBar />
      <Layout>
        <Head>
          <title>{frontMatter.title} | ndom91</title>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${frontMatter.title} | ndom91`} />
          <meta property="og:url" content={`https://ndo.dev/posts/${slug}`} />
          <meta property="og:description" content={frontMatter.excerpt ?? ""} />
          <meta property="article:author" content="Nico Domino" />
          <meta property="article:tag" content={frontMatter.tags.join(",")} />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content={`${frontMatter.title} | ndom91`}
          />
          <meta name="twitter:site" content="@ndom91" />
          <meta name="twitter:description" content={frontMatter.excerpt} />
          <meta name="twitter:image:alt" content={frontMatter.title} />
        </Head>
        <article className="mb-32">
          <PostHeader
            title={frontMatter.title}
            cover={frontMatter.cover}
            date={frontMatter.date}
            time={frontMatter.time ?? "1 min"}
          />
          <div className="max-w-4xl mx-auto prose-sm prose dark:prose-dark md:prose-lg dark:text-gray-100">
            <MDXRemote {...source} components={components} />
          </div>
          <div className="max-w-4xl mt-20 mx-auto prose-sm prose dark:prose-dark md:prose-lg dark:text-gray-100">
            <Giscus
              repo="ndom91/home2021"
              repoId="MDEwOlJlcG9zaXRvcnkzNzYyNzQ4MTk="
              category="Q&A"
              categoryId="DIC_kwDOFm1_g84B_GqA"
              mapping="title"
              reactionsEnabled="1"
              emitMetadata="0"
              theme={theme as Theme}
            />
          </div>
        </article>
      </Layout>
    </>
  )
}

export default Post

export async function getStaticProps({ params }: Params) {
  const postFilePath = path.join(POSTS_PATH, params.slug, "index.mdx")
  const source = await fs.readFile(postFilePath)

  const { content, data } = matter(source)

  data.excerpt = content
    .split("\n")
    .filter((item: string) => item.length)
    .slice(0, 2)
    .join(" ")

  data.time = readingTime(content)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  }
}

export const getStaticPaths = async () => {
  const filePaths = await postFilePaths()
  const paths = filePaths
    .map((path: string) => path.replace(/\.mdx?$/, ""))
    .map((slug: string) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
