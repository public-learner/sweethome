import PostPreview from "@/components/post-preview"
import Post from "../types/post"

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="mt-64">
      <h2 className="mb-8 dark:text-gray-200 text-6xl font-bold tracking-tighter leading-tight md:text-7xl">
        More Stories
      </h2>
      <div className="grid gap-y-20 grid-cols-1 mb-32 dark:text-gray-200 md:gap-x-16 md:gap-y-32 md:grid-cols-2 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            cover={post.cover}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
