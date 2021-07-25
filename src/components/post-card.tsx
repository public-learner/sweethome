import { useState, useEffect } from "react"
import DateFormatter from "@/components/date-formatter"
import Image from "next/image"
import Link from "next/link"

interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

interface StaticRequire {
  default: StaticImageData
}

type StaticImport = StaticRequire | StaticImageData

type Props = {
  index: number
  post: {
    title: string
    cover: {
      imageFile: string
    }
    date: string
    excerpt: string
    slug: string
    category: string
    tags: string[]
    time: {
      text: string
      minutes: number
      time: number
      words: number
    }
  }
}

const PostCard = ({ post, index }: Props) => {
  const odd = index % 2 === 0

  const {
    title,
    cover = { imageFile: "" },
    date,
    excerpt,
    slug,
    category,
    tags,
    time,
  } = post
  const { imageFile } = cover
  const [imageImport, setImage] = useState<StaticImport>()
  const loadImage = (imgur: string) => {
    if (!imgur) {
      return false
    }
    import(`../../public/assets/blog/${imgur}`).then((image) => {
      setImage(image)
    })
  }
  loadImage(imageFile)

  return (
    <div
      className={`flex-col md:inline-flex w-full md:my-16 ${
        odd ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="flex p-8 md:p-0 md:h-full md:overflow-visible md:scale-125 md:w-2/5 post-image">
        {imageImport && (
          <Link href={`/posts/${slug ? slug : ""}`}>
            <a>
              <Image
                src={imageImport}
                alt={`${title} Cover Image`}
                quality="100"
                placeholder="blur"
                objectFit="contain"
                className={`md:overflow-visible ${
                  odd ? "md:-translate-x-10" : "md:translate-x-10"
                }`}
              />
            </a>
          </Link>
        )}
      </div>
      <div className="p-12 md:w-3/5">
        <div className="relative flex flex-col justify-between w-full md:flex-row ">
          <Link href={`/posts/${slug ? slug : ""}`}>
            <a>
              <div className="text-xl font-medium text-gray-600 capitalize transition-colors duration-300 dark:text-gray-100 hover:text-palevioletred">
                {title}
              </div>
            </a>
          </Link>
          <div className="flex flex-col text-sm text-left md:text-right md:text-base">
            <span className="text-medium">
              <DateFormatter dateString={date} />
            </span>
            <span className="text-gray-400 dark:text-gray-900 ">
              {time.text}
            </span>
          </div>
        </div>
        <div
          className="flex w-full max-w-full mt-4 mb-4 prose-sm prose text-gray-600 dark:text-gray-200 prose-pink dark:prose-dark"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="relative flex align-middle">
          <div className="relative flex justify-start overflow-hidden">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 my-auto mr-2 text-xs text-gray-400 bg-gray-200 rounded-full whitespace-nowrap dark:bg-gray-800 dark:text-palevioletred"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mx-2 md:mx-8">
      <div className="relative m-4">
        <div className="relative flex flex-col transition duration-500 md:flex-row rounded-xl hover:shadow-sm-smooth">
          <Link href={`/posts/${slug ? slug : ""}`}>
            <a className="w-full mb-4 bg-gray-200 md:mb-0 md:w-44 dark:bg-gray-600 rounded-xl md:rounded-r-none hover:cursor-pointer post-card-image-wrapper">
              {imageImport && (
                <Image
                  src={imageImport}
                  alt={`${title} Cover Image`}
                  quality="100"
                  layout="responsive"
                  placeholder="blur"
                  objectFit="contain"
                  className="rounded-xl md:rounded-r-none"
                />
              )}
            </a>
          </Link>

          <div className="flex flex-col flex-1 p-1 md:p-10">
            <div className="relative flex flex-col justify-between w-full md:flex-row">
              <Link href={`/posts/${slug ? slug : ""}`}>
                <a>
                  <div className="text-xl font-medium text-gray-600 capitalize transition-colors duration-300 dark:text-gray-100 hover:text-palevioletred">
                    {title}
                  </div>
                </a>
              </Link>
              <div className="flex flex-col-reverse text-sm md:flex-row md:text-base">
                <span className="font-light text-gray-400 md:mx-4 dark:text-gray-900 min-w-max">
                  {time.text}
                </span>
                <span className="text-medium min-w-max">
                  <DateFormatter dateString={date} />
                </span>
              </div>
            </div>
            <div
              className="flex w-full max-w-full mt-4 mb-4 prose-sm prose text-gray-600 dark:text-gray-200 prose-pink dark:prose-dark"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <div className="relative flex align-middle">
              <div className="relative flex justify-start overflow-hidden">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 my-auto mr-2 text-xs text-gray-400 bg-gray-200 rounded-full whitespace-nowrap dark:bg-gray-800 dark:text-palevioletred"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
