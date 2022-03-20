import React, { useState } from "react"
import Image from "next/image"
import Invest1 from "../public/images/sponsors/1.png"
import Invest2 from "../public/images/sponsors/2.png"
import Invest3 from "../public/images/sponsors/3.png"
import Invest4 from "../public/images/sponsors/4.png"
import Invest5 from "../public/images/sponsors/5.png"
import Invest6 from "../public/images/sponsors/6.png"
import Avatar1 from "../public/images/support/avatars/1.jpg"
import Avatar2 from "../public/images/support/avatars/2.jpeg"
import Avatar3 from "../public/images/support/avatars/3.png"
import Stage from "../public/images/support/support.png"
import Left from "../public/images/icons/left.svg"
import Right from "../public/images/icons/right.svg"

const persons = [
  {
    comment:
      "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.",
    img: Avatar1,
    name: "Shawn Edwards",
    company: "Engineer, CreateX",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget. Nisl rhoncus mattis rhoncus urna.",
    img: Avatar2,
    name: "Letitia Wolfe",
    company: "Site supervisor, CreateX",
  },
  {
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: Avatar3,
    name: "Ebony Craig",
    company: "Electrician, CreateX",
  },
]

const Support = () => {
  const [currentPerson, setCurrentPerson] = useState(0)

  const handleNext = () => {
    if (currentPerson == 2) {
      setCurrentPerson(2)
    } else {
      setCurrentPerson(currentPerson + 1)
    }
    console.log(currentPerson)
  }

  const handlePrev = () => {
    if (currentPerson <= 0) {
      setCurrentPerson(0)
    } else {
      setCurrentPerson(currentPerson - 1)
    }
  }

  return (
    <div className="mt-20 bg-gray-100 wideDesktop:h-666 block">
      <div className="mb-16">
        <div className="text-4xl flex justify-center">
          <h1 className="mt-16">Supported by 12+ partners</h1>
        </div>
        <div className="flex items-center justify-center flex-warp wideDesktop:space-x-32 laptop:space-x-10 tablet:space-x-5 tablet:w-full mt-8">
          <div>
            <Image src={Invest1} width="120" height="64" alt="Safety" />
          </div>
          <div>
            <Image src={Invest2} width="120" height="64" alt="Safety" />
          </div>
          <div>
            <Image src={Invest3} width="120" height="64" alt="Safety" />
          </div>
          <div>
            <Image src={Invest4} width="120" height="64" alt="Safety" />
          </div>
          <div>
            <Image src={Invest5} width="120" height="64" alt="Safety" />
          </div>
          <div>
            <Image
              src={Invest6}
              width="120"
              height="64"
              alt="Safety"
              className="grayscale"
            />
          </div>
        </div>
      </div>
      <div className="flex wideDesktop:justify-center wideDesktop:space-x-16 wideDesktop:w-full laptop:space-x-28 laptop:w-full laptop:justify-center tablet:justify-center tablet:max-w-full tablet:space-x-16">
        <div className="block space-y-6 wideDesktop:w-2/5 wideDesktop:max-h-60 laptop:w-96 tablet:w-60">
          <div className="wideDesktop:text-4xl laptop:text-3xl tablet:text-2xl">
            What our clients are saying
          </div>
          <div className="">
            <Image
              src={persons[currentPerson].img}
              width="72"
              height="72"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="font-light">{persons[currentPerson].comment}</div>
          <div className="flex items-center justify-between font-light">
            <div className="block">
              <div className="font-semibold">{persons[currentPerson].name}</div>
              <div className="">{persons[currentPerson].company}</div>
            </div>
            <div className="flex items-center space-x-5 ml-6">
              <button onClick={handlePrev}>
                <Image src={Left} width="30" height="30" alt="Left" />
              </button>
              <button onClick={handleNext}>
                <Image src={Right} width="30" height="30" alt="Left" />
              </button>
            </div>
          </div>
        </div>
        <div className="wideDesktop:w-2/5 wideDesktop:max-h-60 laptop:max-w-sm tablet:w-96">
          <Image src={Stage} width="495" height="550" alt="Support" />
        </div>
      </div>
    </div>
  )
}

export default Support
