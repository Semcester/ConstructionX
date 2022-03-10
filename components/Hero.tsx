import React, { useState } from "react"
import Image from "next/image"
import Next from "../public/images/icons/next.svg"
import Prev from "../public/images/icons/prev.svg"
import Hero1 from "../public/images/heros/1.jpg"
import Hero2 from "../public/images/heros/2.jpg"
import Hero3 from "../public/images/heros/3.jpg"

const Hero = () => {
  const [currentI, setCurrentI] = useState(0)

  const heroImages = [Hero1, Hero2, Hero3]

  const handleNext = () => {
    if (currentI == 2) {
      setCurrentI(2)
    } else {
      setCurrentI(currentI + 1)
    }
    console.log(currentI)
  }

  const handlePrev = () => {
    if (currentI <= 0) {
      setCurrentI(0)
    } else {
      setCurrentI(currentI - 1)
    }
  }
  return (
    <div className="flex flex-warp items-center justify-center">
      <div className="relative  w-full h-screen bg-cover brightness-50">
        <Image
          src={heroImages[currentI]}
          width="1920"
          height="920"
          alt="hero"
        />
      </div>
      <div className="absolute flex flex-warp justify-between w-full px-10">
        <div>
          <button
            onClick={handlePrev}
            className={currentI === 0 ? "opacity-50" : "opacity-100"}
          >
            <Image src={Prev} width="45" height="45" alt="Preview" />
          </button>
        </div>
        <div>
          <button
            onClick={handleNext}
            className={currentI === 2 ? "opacity-50" : "opacity-100"}
          >
            <Image src={Next} width="45" height="45" alt="Next" />
          </button>
        </div>
      </div>
      <div className="absolute block flex-wrap left-64 top-96">
        <div className="text-7xl text-white align-top">
          CREATE<span className="text-brand font-bold">X</span>
          <br /> CONSTRUCTION
        </div>
        <p className="w-96 text-white font-light align-middle">
          Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
          dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
          pellentesque integer ipsum elementum felis.{" "}
        </p>
        <div className="flex flex-wrap space-x-8">
          <button className="border-2 py-2 px-8 top-4 align-bottom rounded-md text-white hover:text-brand hover:bg-white mt-8">
            Learn more about us
          </button>
          <button className=" py-2 px-8 top-4 align-bottom rounded-md bg-brand mt-8 text-white hover:bg-white hover:text-black">
            SUBMIT REQUEST
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
