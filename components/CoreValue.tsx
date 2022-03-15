import React from "react"
import ReactPlayer from "react-player/lazy"
import Image from "next/image"
import Play from "../public/images/icons/play.svg"
import Like from "../public/images/icons/ic-like.svg"
import Safety from "../public/images/icons/ic-hand.svg"
import Comfort from "../public/images/icons/ic-slippers.svg"

const CoreValue = () => {
  return (
    <>
      <div className="grid place-items-center mb-10 mt-16">
        <div className="text-4xl font-bold">
          <h3>We are Createx Construction Bureau </h3>
        </div>
        <div className="text-xl font-light mt-6 mb-6">
          <h3>
            We are rightfully considered to be the best construction company in
            the USA.
          </h3>
        </div>
        <ReactPlayer
          url="https://vimeo.com/381079762"
          width="70%"
          height="300px"
          playing
          playIcon={<Image src={Play} width="150" height="150" alt="Play" />}
          light="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>

      <div className="grid place-items-center mt-44 mb-44">
        <div className="text-4xl font-bold">
          <h3>Our core values </h3>
        </div>
        <div className="text-xl font-light mt-6 mb-6">
          <h3>
            Our mission is to set the highest standards for construction sphere.
          </h3>
        </div>
        <div className=" space-x-36 mt-10 laptop:flex laptop:space-x-5 tablet:space-x-2 wideDesktop:flex wideDesktop:space-x-32 mobile:block mobile:items-center">
          <div className=" grid place-items-center ">
            <Image src={Like} width="70" height="70" alt="Like" />
            <div className="mt-6 flex flex-col items-center space-y-2">
              <h3 className="font-semibold">Quality</h3>
              <p className="w-60 text-center font-light">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
          </div>
          <div className=" grid place-items-center">
            <Image src={Safety} width="70" height="70" alt="Safety" />
            <div className="mt-6 flex flex-col items-center space-y-2">
              <h3 className="font-semibold">Safety</h3>
              <p className="w-60 text-center font-light">
                Anim reprehenderit sint voluptate exercitation adipisicing
                laborum adipisicing. Minim empor est ea.
              </p>
            </div>
          </div>
          <div className=" grid place-items-center">
            <Image src={Comfort} width="70" height="70" alt="Comfort" />
            <div className="mt-6 flex flex-col items-center space-y-2">
              <h3 className="font-semibold">Comfort</h3>
              <p className="w-60 text-center font-light">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                voluptate ullamco proident ea ad.
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  )
}

export default CoreValue
