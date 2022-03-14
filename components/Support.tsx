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
  const avatars = [Avatar1, Avatar2, Avatar3]

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
    <div className="mt-20 bg-gray-100 h-934">
      <div className="mb-32">
        <div className="text-4xl flex justify-center">
          <h1 className="mt-16">Supported by 12+ partners</h1>
        </div>
        <div className="flex items-center justify-center flex-warp space-x-32 mt-8">
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
      <div className="grid justify-center items-center w-3/5 h-60 mx-auto">
        <div className="flex flex-warp justify-between space-x-32">
          <div className="block ">
            <div className="text-4xl mb-14">What our clients are saying</div>
            <Image
              src={persons[currentPerson].img}
              width="80 "
              height="80 "
              alt="Avatar"
              className="rounded-full"
            />
            <div className="w-96 mt-4 font-normal">
              {persons[currentPerson].comment}
            </div>
            <div className="flex">
              <div className="block">
                <div className="w-96 mt-4">{persons[currentPerson].name}</div>
                <div className="w-96 mt-1 font-light">
                  {persons[currentPerson].company}
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button onClick={handlePrev}>
                  <Image src={Left} width="25" height="25" alt="left" />
                </button>
                <button onClick={handleNext}>
                  <Image src={Right} width="25" height="25" alt="right" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Stage}
              width="630"
              height="700"
              alt="Stage"
              className="absolute"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
