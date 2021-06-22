import Link from "next/link"
import DarkToggle from "@/components/dark-toggle"

const Navbar = () => {
  return (
    <nav className="flex p-4 opacity-0 space-between animate-fade-in">
      <ul className="flex items-center w-full space-x-10 text-xl text-gray-800 dark:text-gray-100 font-extralight">
        <li>
          <Link href="/">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 font-light hover:border-b-8 focus:border-b-8 dark:border-palevioletred border-pink-300 focus:outline-none outline-none transition-all duration-200">
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 font-light hover:border-b-8 focus:border-b-8 dark:border-palevioletred border-pink-300 focus:outline-none outline-none transition-all duration-200">
              blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 font-light hover:border-b-8 focus:border-b-8 dark:border-palevioletred border-pink-300 focus:outline-none outline-none transition-all duration-200">
              work
            </a>
          </Link>
        </li>
      </ul>
      <DarkToggle />
      <audio
        src="/assets/toggle-off.mp3"
        id="js-sound-off"
        preload="auto"
        hidden
      ></audio>
      <audio
        src="/assets/toggle-on.mp3"
        id="js-sound-on"
        preload="auto"
        hidden
      ></audio>
    </nav>
  )
}
export default Navbar
