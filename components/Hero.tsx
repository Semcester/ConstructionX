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
    <div className="flex flex-warp items-center justify-center ">
      <div className="brightness-50 laptop:w-1920 sticky">
        <Image
          src={heroImages[currentI]}
          width="1920"
          height="920"
          alt="hero"
        />
      </div>
      <div className="absolute flex flex-warp justify-between w-full px-10 ">
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
      <div className="absolute block laptop:left-36 laptop:top-48 wideDesktop:top-64 mobilexs:invisible laptop:visible desktop:visible tablet:visible">
        <div className="text-7xl text-white align-top tablet:text-3xl wideDesktop:text-7xl laptop:text-5xl">
          CREATE<span className="text-brand font-bold">X</span>
          <br /> CONSTRUCTION
        </div>
        <p className="text-white font-light align-middle tablet:text-sm wideDesktop:text-xl">
          Cras ultrices leo vitae non viverra. Fringilla nisi quisque <br />
          consequat, dignissim vitae proin ipsum sed. Pellentesque nec
          <br /> turpis purus eget pellentesque integer ipsum elementum felis.{" "}
        </p>
        <div className="flex flex-wrap space-x-8">
          <button className="border-2 py-2 px-8 top-4 align-bottom rounded-md text-white hover:text-brand hover:bg-white mt-8 tablet:py-1 tablet:px-3">
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
