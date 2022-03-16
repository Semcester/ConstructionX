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
          <div className="flex space-x-16 justify-center items-center mt-10 wideDesktop:w-full laptop:w-full laptop:ml-0 laptop:items-center tablet:w-4/5 tablet:flex tablet:justify-center tablet:items-center tablet:ml-24">
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
            <div className="wideDesktop:flex wideDesktop:justify-center mt-10 wideDesktop:space-x-7 wideDesktop:space-y-0 laptop:space-x-7 laptop:w-11/12 laptop:flex laptop:justify-center laptop:ml-10 laptop:space-y-3 tablet:space-y-10 tablet:block">
              <div className="bg-white shadow-lg wideDesktop:h-540 wideDesktop:ml-0 wideDesktop:w-3/6 laptop:ml-0 tablet:w-2/4 tablet:ml-48 rounded-md">
                <div>
                  <Image src={BuiltOne} width="705" height="360" />
                </div>
                <div className="texts space-y-3 mt-5 ml-4">
                  <div className="text-2xl hover:text-brand">
                    How to Build Climate Change-Resilient Infrastructure
                  </div>
                  <div className="flex items-center space-x-10 ">
                    <span className="font-light">Industry News</span>
                    <span className="font-light">June 24, 2020</span>
                    <div className="font-light flex items-center space-x-3">
                      <div>
                        <Image src={Chat} width="16" height="16" />
                      </div>
                      <div>4 comments</div>
                    </div>
                  </div>
                  <div>
                    Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
                    faucibus. Tincidunt aliquet sit <br /> vel, venenatis nulla.
                    Integer bibendum turpis convallis enim, nibh convallis...
                  </div>
                </div>
              </div>
              <div className="block wideDesktop:space-y-8 laptop:space-y-16">
                <div className="bg-white shadow-lg wideDesktop:w-495 wideDesktop:h-64 wideDesktop:ml-0 laptop:ml-0  tablet:w-96  tablet:ml-48 rounded-md block ">
                  <div className="img">
                    <Image src={BuiltTwo} width="495" height="156" />
                  </div>
                  <div className="texts space-y-3 mt-3 ml-4 ">
                    <div className="text-xl hover:text-brand">
                      How Construction Can Help Itself
                    </div>
                    <div className="flex items-center space-x-8">
                      <span className="font-light">Innovation</span>
                      <span className="font-light">June 12, 2020</span>
                      <div className="font-light flex items-center space-x-3">
                        <div>
                          <Image src={Chat} width="16" height="16" />
                        </div>
                        <div>No comments</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-lg wideDesktop:w-495 wideDesktop:h-64 wideDesktop:ml-0 laptop:ml-0  tablet:w-96  tablet:ml-48 tablet:mt-10 rounded-md">
                  <div className="img">
                    <Image src={BuiltThree} width="495" height="156" />
                  </div>
                  <div className="texts space-y-3 mt-3 ml-4 ">
                    <div className="text-xl hover:text-brand">
                      Types of Flooring Materials
                    </div>
                    <div className="flex items-center space-x-8">
                      <span className="font-light">Company News</span>
                      <span className="font-light">December 1, 2019</span>
                      <div className="font-light flex items-center space-x-3">
                        <div>
                          <Image src={Chat} width="16" height="16" />
                        </div>
                        <div>No comments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-10 mt-32">
              <div className="text-3xl">Explore all our news posts</div>
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
