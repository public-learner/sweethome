import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-center text-6xl font-bold tracking-tighter leading-tight md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  )
}

export default PostTitle
