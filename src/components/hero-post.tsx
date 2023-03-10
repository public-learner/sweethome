import Link from 'next/link'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Avatar from '@/components/avatar'
import DateFormatter from '@/components/date-formatter'
import CoverImage from '@/components/cover-image'

type Props = {
  title: string
  cover: {
    imageFile: string
  }
  date: string
  slug: string
  time: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

const HeroPost = ({ title, cover, date, slug, time }: Props) => {
  return (
    <section className="animate-fade_in rounded-2xl bg-white p-8 opacity-0 shadow-xl dark:bg-gray-700 md:p-16 max-w-7xl mx-auto w-full">
      <div className="mask-bottom-strong mb-8 h-auto overflow-hidden md:mb-16 md:h-96">
        <ParallaxProvider>
          <Parallax translateY={[10, -10]}>
            <CoverImage title={title} cover={cover} slug={slug} />
          </Parallax>
        </ParallaxProvider>
      </div>
      <div className="sm:grid sm:grid-cols-5 md:gap-x-16 lg:gap-x-8">
        <div className="col-span-4">
          <h3 className="mb-2 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="rounded-sm font-sans font-extralight outline-none first-letter:text-4xl hover:outline-none focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-100 focus:dark:ring-palevioletred focus:dark:ring-offset-gray-500">
                {title}
              </a>
            </Link>
          </h3>
          <div className="mb-4 flex space-x-4 font-block text-lg font-light md:justify-start">
            <DateFormatter dateString={date} />
            <span className="dark:text-gray-300 text-gray-400">
              {time.text}
            </span>
          </div>
        </div>
        <div className="flex justify-start sm:justify-end">
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
