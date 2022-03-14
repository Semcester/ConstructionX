import React from "react"
import Image from "next/image"
import First from "../public/images/facts/20.png"
import Second from "../public/images/facts/98.png"
import Third from "../public/images/facts/9452.png"
import Fourth from "../public/images/facts/100.png"
import BuiltOne from "../public/images/facts/Built.png"
import BuiltTwo from "../public/images/facts/Built2.png"
import BuiltThree from "../public/images/facts/Built3.png"
import Chat from "../public/images/facts/chat.png"

const Facts = () => {
  const percentage = 66
  return (
    <div className="top-0  bg-facts bg-fit w-full bg-no-repeat bg-left-top">
      <div className="block">
        <div className="block mt-48">
          <div className="text-center text-5xl font-bold">
            Some facts and figures
          </div>
          <div className="flex space-x-16 justify-center items-center mt-10 ">
            <div className="block">
              <Image
                src={Second}
                width="148"
                height="148"
                alt="Stage"
                className="absolute"
              />
              <p className="text-center">Totally satisfied clients</p>
            </div>
            <div className="block">
              <Image
                src={First}
                width="148"
                height="148"
                alt="Stage"
                className="absolute"
              />
              <p className="text-center">Years of experience</p>
            </div>
            <div className="block">
              <Image
                src={Third}
                width="148"
                height="148"
                alt="Stage"
                className="absolute"
              />
              <p className="text-center">Working hours spent</p>
            </div>
            <div className="block">
              <Image
                src={Fourth}
                width="148"
                height="148"
                alt="Stage"
                className="absolute"
              />
              <p className="text-center">Succeeded projects</p>
            </div>
          </div>
          <div className="block mt-44">
            <div className="text-center text-5xl font-bold">Recent news</div>
            <div className="flex justify-center items-center mt-10 space-x-10 h-1/3">
              <div className="bg-white shadow-xl w-1/3 rounded-md">
                <Image
                  src={BuiltOne}
                  width="705"
                  height="360"
                  alt="Stage"
                  className="absolute"
                />
                <div className="ml-4">
                  <p className="text-left text-xl">
                    How to Build Climate Change-Resilient Infrastructure
                  </p>
                  <div className="flex space-x-6 mt-4 ">
                    <div className="font-light text-sm ">Industry News</div>
                    <div className="font-light text-sm">June 24, 2020</div>
                    <div className="font-light text-sm flex space-x-2">
                      <Image
                        src={Chat}
                        width="20"
                        height="10"
                        alt="Stage"
                        className="absolute"
                      />
                      <p>4 comments</p>
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
                    faucibus. Tincidunt aliquet sit vel, venenatis nulla.
                    Integer bibendum turpis convallis enim, nibh convallis...
                  </div>
                </div>
              </div>
              <div className="block ">
                <div className="bg-white shadow-xl w-96 rounded-md mb-16">
                  <Image
                    src={BuiltTwo}
                    width="495"
                    height="156"
                    alt="Stage"
                    className="absolute"
                  />
                  <div className="ml-4 h-20">
                    <p className="text-left text-brand text-xl">
                      How Construction Can Help Itself
                    </p>
                    <div className="flex space-x-6 mt-4">
                      <div className="font-light text-sm">Innovation</div>
                      <div className="font-light text-sm">June 24, 2020</div>
                      <div className="font-light text-sm flex space-x-2">
                        <Image
                          src={Chat}
                          width="20"
                          height="10"
                          alt="Stage"
                          className="absolute"
                        />
                        <p>4 comments</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-xl w-96 rounded-md">
                  <Image
                    src={BuiltThree}
                    width="495"
                    height="156"
                    alt="Stage"
                    className="absolute"
                  />
                  <div className="ml-4 h-20">
                    <p className="text-left text-xl">
                      Types of Flooring Materials
                    </p>
                    <div className="flex space-x-6  mt-2">
                      <div className="font-light text-sm">Company News</div>
                      <div className="font-light text-sm">December 1, 2019</div>
                      <div className="font-light text-sm flex space-x-2">
                        <Image
                          src={Chat}
                          width="20"
                          height="10"
                          alt="Stage"
                          className="absolute"
                        />
                        <p className="">No comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-10 mt-32">
              <div className="text-3xl">Explore all our works</div>
              <button className="bg-brand text-white px-2 py-2 border-2 border-orange-600 w-36 rounded-sm">
                VIEW ALL NEWS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
