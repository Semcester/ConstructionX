import React from "react"
import Image from "next/image"
import RedFinger from "../public/images/browse/redFinger.png"
import Cubes from "../public/images/browse/cubes.png"
import Pencil from "../public/images/browse/pencil.png"

const Browse = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center m-32">
          <div className="block">
            <div className="text-3xl w-full flex-warp">
              Browse our selected projects <br />
              and learn more about our work
            </div>
            <div className="flex flex-wrap space-x-16 mt-10 rounded-md">
              <div className="w-96 h-full bg-white-400 shadow-xl group ">
                <Image
                  src={RedFinger}
                  width="390"
                  height="345"
                  alt="redFinger"
                />
                <div className=" grid justify-items-center mb-10 mt-4">
                  <span className="text-xl">Red Finger Building</span>
                  <span className="text-sm font-light">Business Centers</span>
                  <button className="hidden group-hover:block transition ease-in-out duration-500 hover:bg-brand hover:text-white text-brand px-2 py-2 border-2 border-orange-600 w-32 mt-4">
                    View Project
                  </button>
                </div>
              </div>
              <div className="w-96 h-full bg-white-400 shadow-xl group">
                <Image src={Cubes} width="390" height="345" alt="redFinger" />
                <div className="grid justify-items-center mb-10 mt-4">
                  <span className="text-xl">Red Finger Building</span>
                  <span className="text-sm font-light">Business Centers</span>
                  <button className="hidden group-hover:block hover:bg-brand hover:text-white transition ease-in-out duration-500 text-brand px-2 py-2 border-2 border-orange-600 w-32 mt-4">
                    View Project
                  </button>
                </div>
              </div>
              <div className="w-96 h-full bg-white-400 shadow-xl group">
                <Image src={Pencil} width="390" height="345" alt="redFinger" />
                <div className="grid justify-items-center mb-10 mt-4">
                  <span className="text-xl">Red Finger Building</span>
                  <span className="text-sm font-light">Business Centers</span>
                  <button className="hidden group-hover:block transition ease-in-out duration-500 text-brand hover:bg-brand hover:text-white px-2 py-2 border-2 border-orange-600 w-32 mt-4">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 space-x-16">
        <div className="text-3xl">Explore all our works</div>
        <button className="px-4 py-4 border-2 w-60 text-white bg-orange-600 rounded-md">
          VIEW PORFOLIO
        </button>
      </div>
    </>
  )
}

export default Browse
