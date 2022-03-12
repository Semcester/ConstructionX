import React from "react"
import Image from "next/image"
import RedFinger from "../public/images/browse/redFinger.png"
import Cubes from "../public/images/browse/cubes.png"
import Pencil from "../public/images/browse/pencil.png"

const Browse = () => {
  return (
    <>
      <div>
        <div className="mt-16">
          <div className="text-4xl font-bold flex flex-wrap ml-96 mb-8">
            Browse our selected projects
            <br /> and learn more about our work
          </div>
          <div className="flex space-x-32 items-center justify-center">
            <div className=" bg-redFinger bg-no-repeat bg-fit shadow-xl w-72 h-96 group bg-fit hover:scale-105 transition ease-linear duration-200  hover:shadow-xl">
              <div className="card">
                <div className="block bg-white w-72 text-center mt-4 h-16 group-hover:h-40 transition easy-in duration-2000">
                  <div className="mt-72 px-4 py-2 text-xl">
                    Red Finger Building
                  </div>
                  <p className="font-light">Business Centers</p>
                  <button className="bg-brand text-white px-2 py-2 border-2 border-orange-600 w-32 group-hover:visible mt-4 invisible  ">
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <div className=" bg-cubes bg-no-repeat bg-fit shadow-xl w-72 h-96 group mr-6 bg-fit hover:scale-105 transition ease-linear duration-200 hover:shadow-xl">
              <div className="card">
                <div className="block bg-white w-72 text-center mt-4 h-16 group-hover:h-40 transition easy-in duration-2000">
                  <div className="mt-72 px-4 py-2 text-xl">Cubes Building</div>
                  <p className="font-light">Business Centers</p>
                  <button className="bg-brand text-white px-2 py-2 border-2 border-orange-600 w-32 group-hover:visible mt-4 invisible  ">
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <div className=" bg-pencil bg-no-repeat bg-fit shadow-xl w-72 h-96 group hover:scale-105 transition ease-linear duration-200 hover:shadow-xl">
              <div className="card">
                <div className="block bg-white w-72 text-center mt-4 h-16 group-hover:h-40 transition easy-in duration-2000">
                  <div className="mt-72 px-4 py-2 text-xl">
                    The Pencil Building
                  </div>
                  <p className="font-light">Business Centers</p>
                  <button className="bg-brand text-white px-2 py-2 border-2 border-orange-600 w-32 group-hover:visible mt-4 invisible  ">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-10 mt-32">
          <div className="text-3xl">Explore all our works</div>
          <button className="bg-brand text-white px-2 py-2 border-2 border-orange-600 w-32 ">
            View Project
          </button>
        </div>
      </div>
    </>
  )
}

export default Browse
