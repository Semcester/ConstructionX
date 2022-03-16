import React from "react"
import Image from "next/image"
import BG from "../public/images/application/BG.png"

const Application = () => {
  return (
    <div className="mt-28 w-full h-full flex flex-warp items-center">
      <div className="relative">
        <Image src={BG} width="1920" height="826" alt="right" />
      </div>
      <div className="absolute bg-white shadow-xl rounded-md  flex justify-center items-center overflow-hidden border-2 border-brand wideDesktop:w-495 wideDesktop:h-3/4 wideDesktop:right-40 wideDesktop:mb-0 laptop:w-96 laptop:h-432 laptop:right-16 laptop:mb-2 tablet:w-96 tablet:h-432 tablet:right-16">
        <div className="block wideDesktop:space-y-4 wideDesktop:mt-16 wideDesktop:px-0 wideDesktop:py-0 laptop:space-y-2 laptop:h-full laptop:py-4 laptop:px-4 tablet:space-y-1 ">
          <div className="wideDesktop:text-3xl laptop:text-xl tablet:text-xl">
            A quick way to discuss details
          </div>
          <div className="block ">
            <label>Name*</label>
            <br />
            <input
              className="shadow appearance-none border rounded wideDesktop:w-96 laptop:w-64 tablet:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="block ">
            <label>Phone*</label>
            <br />
            <input
              className="shadow appearance-none border rounded wideDesktop:w-96 laptop:w-64 tablet:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="phone"
              type="text"
              placeholder="Your phone number"
            />
          </div>
          <div className="block ">
            <label>Email*</label>
            <br />
            <input
              className="shadow appearance-none border rounded wideDesktop:w-96 laptop:w-64 tablet:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="email"
              type="text"
              placeholder="email@email.com"
            />
          </div>
          <div className="block ">
            <label>Message*</label>
            <br />
            <textarea
              className="shadow appearance-none border rounded wideDesktop:w-96 wideDesktop:h-full wideDesktop:max-h-16 laptop:h-8 tablet:w-80 laptop:max-h-10 laptop:w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-20 bg-gray-200"
              id="username"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-start  form-checkbox space-x-2">
            <input
              type="checkbox"
              className="form-checkbox w-5 h-5 accent-brand"
            />
            <label className="form-check-label inline-block text-gray-800 wideDesktop:w-96 wideDesktop:text-base laptop:w-64 laptop:text-xs tablet:text-sm wideDesktop:text-md ">
              I agree to receive communications from Createx <br /> Construction
              Bureau.
            </label>
          </div>
          <div className="flex justify-center items-center wideDesktop:w-96 laptop:w-64">
            <button className="bg-brand rounded-md px-4 wideDesktop:py-2 text-white wideDesktop:w-52 laptop:w-44 laptop:py-1">
              SEND REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application
