import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import setFlickerAnimation from '../lib/flicker'
import useStore from '../lib/zustand'
const IntroDescription = dynamic(() => import('./intro-description'), {
  ssr: false,
})

const Intro = () => {
  useEffect(() => {
    setFlickerAnimation()
  }, [])
  const setHoverText = useStore((state) => state.setHoverText)

  return (
    <section className="relative z-10 my-16 flex flex-col items-start text-left lg:my-[20vh] lg:flex-row lg:items-center lg:justify-between max-w-7xl">
      <div className="relative h-16 w-2/3">
        <h1
          onMouseEnter={() => setHoverText(true)}
          onMouseLeave={() => setHoverText(false)}
          className="js_darkmode_flicker intro-title animate-fade_in_up_30 pl-2 font-sans text-9xl font-extrabold leading-tight tracking-tighter opacity-0 dark:text-gray-100 lg:pl-0 lg:pr-8 lg:text-10xl"
        >
          ndom91.
        </h1>
      </div>
      <IntroDescription />
    </section>
  )
}

export default Intro
