import React from "react"
import Image from "next/image"
import BG from "../public/images/application/BG.png"

const Application = () => {
  return (
    <div className="mt-28 w-full h-full flex flex-warp items-center">
      <div className="relative">
        <Image src={BG} width="1920" height="826" alt="right" />
      </div>
      <div className="absolute bg-white shadow-xl rounded-md w-495 h-666 right-60 flex justify-center items-center overflow-hidden border-2 border-brand">
        <div className="block space-y-8 mt-5">
          <div className="text-3xl">A quick way to discuss details</div>
          <div className="block space-y-2">
            <label>Name*</label>
            <br />
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="block space-y-2">
            <label>Phone*</label>
            <br />
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="phone"
              type="text"
              placeholder="Your phone number"
            />
          </div>
          <div className="block space-y-2">
            <label>Email*</label>
            <br />
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="email"
              type="text"
              placeholder="email@email.com"
            />
          </div>
          <div className="block space-y-2">
            <label>Message*</label>
            <br />
            <textarea
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-20 bg-gray-200"
              id="username"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-start  form-checkbox space-x-2">
            <input
              type="checkbox"
              className="form-checkbox w-5 h-5 accent-brand"
            />
            <label className="form-check-label inline-block text-gray-800">
              I agree to receive communications from Createx <br /> Construction
              Bureau.
            </label>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-brand rounded-md px-4 py-2 text-white w-52">
              SEND REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application
