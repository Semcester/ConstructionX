import React from "react"

const Browse = () => {
  return (
    <>
      <div>
        <div className="wideDesktop:mt-40 wideDesktop:block laptop:mt-72 tablet:mt-96">
          <div className="text-4xl font-bold mb-8 wideDesktop:ml-40 laptop:ml-24 tablet:ml-16 ">
            Browse our selected projects
            <br /> and learn more about our work
          </div>
          <div className="flex laptop:space-x-20 wideDesktop:space-x-32 tablet:space-x-16 items-center justify-center">
            <div className=" bg-redFinger bg-no-repeat bg-fit shadow-xl wideDesktop:w-72 wideDesktop:h-96 laptop:w-56 laptop:h-54 tablet:w-44 tablet:h-52 group bg-fit hover:scale-105 transition ease-linear duration-200  hover:shadow-xl ">
              <div className="card">
                <div className="block bg-white wideDesktop:w-72 text-center mt-4 wideDesktop:h-16 laptop:w-56 laptop:h-4 tablet:w-44 tablet:h-52 group-hover:h-40 transition easy-in duration-2000">
                  <div className="wideDesktop:mt-72 laptop:mt-52 tablet:mt-52 px-4 py-2 text-xl">
                    Red Finger Building
                  </div>
                  <p className="font-light">Business Centers</p>
                  <button className="bg-brand text-white px-2 py-2 border-2 border-orange-600 w-32 group-hover:visible mt-4 invisible  ">
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <div className=" bg-cubes bg-no-repeat bg-fit shadow-xl wideDesktop:w-72 wideDesktop:h-96 laptop:w-56 laptop:h-54 tablet:w-44 tablet:h-52 group mr-6 bg-fit hover:scale-105 transition ease-linear duration-200 hover:shadow-xl">
              <div className="card">
                <div className="block bg-white wideDesktop:w-72 text-center mt-4 wideDesktop:h-16 laptop:w-56 laptop:h-4 tablet:w-44 tablet:h-52 group-hover:h-40 transition easy-in duration-2000">
                  <div className="wideDesktop:mt-72 laptop:mt-52 tablet:mt-52 px-4 py-2 text-xl">
                    Cubes Building
                  </div>
                  <p className="font-light">Business Centers</p>
                  <button className="bg-brand text-white px-2 py-2 border-2 border-orange-600 w-32 group-hover:visible mt-4 invisible  ">
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <div className=" bg-pencil bg-no-repeat bg-fit shadow-xl wideDesktop:w-72 wideDesktop:h-96 laptop:w-56 laptop:h-54 tablet:w-44 tablet:h-52 group hover:scale-105 transition ease-linear duration-200 hover:shadow-xl">
              <div className="card">
                <div className="block bg-white wideDesktop:w-72 text-center mt-4 wideDesktop:h-16 laptop:w-56 laptop:h-4 tablet:w-44 tablet:h-52 group-hover:h-40 transition easy-in duration-2000">
                  <div className="wideDesktop:mt-72 laptop:mt-52 tablet:mt-52 px-4 py-2 text-xl">
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
        <div className="flex justify-center items-center space-x-10 mt-60 ">
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
