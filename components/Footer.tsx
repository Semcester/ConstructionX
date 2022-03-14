import React from "react"
import Image from "next/image"
import WhatsApp from "../public/images/footer/socials/WhatsApp.svg"
import Messenger from "../public/images/footer/socials/Messanger.svg"
import Facebook from "../public/images/footer/socials/Facebook.svg"
import Twitter from "../public/images/footer/socials/Twitter.svg"
import Youtube from "../public/images/footer/socials/Youtube.svg"
import Logo from "../public/images/footer/socials/Logo-white.png"
import Heart from "../public/images/footer/socials/Heart.svg"
import Up from "../public/images/icons/up-btn.svg"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className="bg-footer text-white">
      <div className="flex items-center justify-center space-x-16">
        <div className="block mt-10">
          <div className="flex items-center space-x-8 mb-10">
            <Image src={Logo} width="130" height="22" alt="right" />
            <div className="flex flex-warp -space-x-24">
              <button>
                <Image src={WhatsApp} width="130" height="22" alt="right" />
              </button>
              <button>
                <Image src={Messenger} width="130" height="22" alt="right" />
              </button>
              <button>
                <Image src={Facebook} width="130" height="22" alt="right" />
              </button>
              <button>
                <Image src={Twitter} width="130" height="22" alt="right" />
              </button>
              <button>
                <Image src={Youtube} width="130" height="22" alt="right" />
              </button>
            </div>
          </div>
          <div className="mb-10 font-light">
            Createx Construction Bureau has been successfully operating in the
            USA
            <br /> construction market since 2000. We are proud to offer you
            quality <br />
            construction and exemplary service. Our mission is to set the
            highest
            <br /> standards for construction sphere.
          </div>
          <div className="flex items-center justify-center space-x-44">
            <div className="block">
              <div className="mb-4 font-bold">HEAD OFFICE</div>
              <div className="mb-2 font-light">
                <span className="font-normal">Adress: </span>8502 Preston Rd.
                Inglewood, New York
              </div>
              <div className="mb-2 font-light">
                <span className="font-normal">Call: </span>(405) 555-0128
              </div>
              <div className="mb-16 font-light">
                <span className="font-normal">Email:: </span>hello@createx.com
              </div>
              <div>
                © All rights reserved. Made with
                <Image src={Heart} width="15" height="13" alt="right" />
                by Createx Studio{" "}
              </div>
            </div>
            <div className="block mb-32">
              <div className="mb-4">WHO WE ARE</div>
              <ul className="block font-light">
                <a href="#">
                  <li>About Us</li>
                </a>
                <a href="#">
                  <li>Available Positions </li>
                </a>
                <a href="#">
                  <li>Contacts </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="block mb-16 mt-6">
          <div className="space-y-4">
            <div className="text-4xl">Let's say in touch</div>
            <div className="flex items-center">
              <input
                type="email"
                className="bg-gray-700 w-96 h-10 py-2 px-4"
                placeholder="Your email address"
              />
              <button className="bg-brand py-2 px-8">SUBSCRIBE</button>
            </div>
            <div className="font-light">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx <br />
              Construction Bureau.
            </div>
          </div>
          <div className="block mt-12">
            <div className="mb-4">OUR EXPERIENCE</div>
            <div className="font-light">
              <ul>
                <a href="#" className="">
                  <li>Services</li>
                </a>
                <a href="#" className="">
                  <li>Work</li>
                </a>
                <a href="#" className="">
                  <li>News</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <div>GO TO TOP</div>
            <button onClick={scrollToTop}>
              <Image src={Up} width="40" height="40" alt="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
