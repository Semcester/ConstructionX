import React from "react"
import Image from "next/image"
import SecondHero from "../public/images/secondHeroBg.png"
import Construction from "../public/images/icons/ic-construction.svg"
import Plan from "../public/images/icons/ic-plan.svg"
import Interior from "../public/images/icons/ic-pantone.svg"
import Painting from "../public/images/icons/ic-painting.svg"
import Const from "../public/images/services/const.jpg"

const Service = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center mt-64 ">
        <Image src={SecondHero} width="1920" height="920" />
        <div className="w-full h-28  absolute mx-auto -top-16 flex items-center justify-center">
          <div className="block  bg-white rounded-md px-5 py-5 shadow-2xl laptop:w-3/4 tablet:w-3/4">
            <div className="mb-6 font-bold text-3xl flex items-center justify-center">
              Want to know more? Ask us a question
            </div>
            <div className="mt-10 flex items-center justify-center">
              <div className="flex space-x-10 ">
                <div className="block space-y-1">
                  <h1>Name</h1>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline laptop:w-32 wideDesktop:w-64 tablet:w-28"
                    id="username"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="block space-y-1">
                  <h1>Phone</h1>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline laptop:w-32 wideDesktop:w-64 tablet:w-28"
                    id="username"
                    type="text"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="block space-y-1">
                  <h1>Message</h1>
                  <textarea
                    className="shadow appearance-none border rounded w-96 py-2 px-3 max-h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline laptop:w-48 wideDesktop:w-64 tablet:w-28"
                    id="username"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button className="bg-brand rounded-md px-4 py-2 text-white flex items-center justify-center  ml-6">
                SEND
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-64  flex items-center justify-center">
          <div className="block">
            <div className="font-bold text-3xl text-center">Our Service</div>
            <p className="text-center mt-6 font-light">
              Createx Construction Bureau is a construction giant with a full
              range of construction services.
            </p>
            <div className="flex items-center justify-center space-x-10 mt-16">
              <button>
                <div className="wideDesktop:w-64 wideDesktop:h-64 bg-white shadow-md rounded-md flex items-center justify-center hover:bg-const hover:text-white transition ease-linear duration-300 laptop:w-44 laptop:h-44 tablet:w-36 tablet:h-36">
                  <div className="text-center">
                    <Image
                      src={Construction}
                      width="50"
                      height="50"
                      className="items-center"
                      alt="Construction"
                    />
                    <h1 className="text-center text-xl">Construction</h1>
                  </div>
                </div>
              </button>
              <button>
                <div className="wideDesktop:w-64 wideDesktop:h-64 bg-white shadow-md rounded-md flex items-center justify-center hover:bg-project hover:text-white transition ease-linear duration-300 laptop:w-44 laptop:h-44 tablet:w-36 tablet:h-36">
                  <div className="text-center">
                    <Image
                      src={Plan}
                      width="50"
                      height="50"
                      className="items-center"
                      alt="Plan"
                    />
                    <h1 className="text-center text-xl">Project Development</h1>
                  </div>
                </div>
              </button>
              <button>
                <div className="wideDesktop:w-64 wideDesktop:h-64 bg-white shadow-md rounded-md flex items-center justify-center hover:bg-serviceBg1 hover:text-white transition ease-linear duration-300 laptop:w-44 laptop:h-44 tablet:w-36 tablet:h-36">
                  <div className="text-center">
                    <Image
                      src={Interior}
                      width="50"
                      height="50"
                      className="items-center"
                      alt="Interior"
                    />
                    <h1 className="text-center text-xl">Interior Design</h1>
                  </div>
                </div>
              </button>
              <button>
                <div className="wideDesktop:w-64 wideDesktop:h-64 bg-white shadow-md rounded-md flex items-center justify-center hover:bg-repair hover:text-white transition ease-linear duration-300 laptop:w-44 laptop:h-44 tablet:w-36 tablet:h-36">
                  <div className="text-center">
                    <Image
                      src={Painting}
                      width="50"
                      height="50"
                      className="items-center"
                      alt="Paint"
                    />
                    <h1 className="text-center text-xl">Repairs</h1>
                  </div>
                </div>
              </button>
            </div>
            <div className="text-center mt-16 flex items-center justify-center space-x-6">
              <h1 className="text-2xl">Learn more about our services</h1>
              <button className=" py-2 px-2 top-4 align-bottom rounded-md bg-brand  text-white hover:bg-white hover:text-black hover:border-2 border-orange-600 transition ease-linear duration-100 hover:shadow-md">
                View services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
