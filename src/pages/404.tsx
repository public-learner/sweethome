import Layout from "@/components/layout"
import Image from "next/image"
import { useRouter } from "next/router"
import Travolta from "../../public/assets/travolta.webp"

const FourOhFour = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-full space-y-12 dark:text-white">
        <img
          src="/assets/travolta.webp"
          alt="Travola Lost"
          className="flex-1 w-auto h-auto filter grayscale contrast-125 brightness-125 lg:mt-12"
        />
        <p className="text-xl font-light text-gray-800 dark:text-gray-200">
          Whoops, it looks like the page you were looking for doesn&apos;t
          exist!
        </p>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center justify-center px-4 py-2 text-lg font-light text-gray-800 whitespace-no-wrap transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm outline-none hover:bg-gray-50 focus:outline-none focus:shadow-none w-72 dark:bg-bgGray dark:border-palevioletred dark:text-gray-200 focus:ring-4 focus:ring-pink-300 dark:focus:ring-palevioletred dark:focus:ring-opacity-20 hover:ring-4 hover:ring-pink-300 dark:hover:ring-palevioletred dark:hover:ring-opacity-20"
        >
          Back
        </button>
      </div>
    </Layout>
  )
}

export default FourOhFour
