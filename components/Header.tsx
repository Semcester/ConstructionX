import React, { useState } from "react"
import Image from "next/image"
import Logo from "../public/images/logo.svg"
import Cell from "../public/images/icons/cellPhone.svg"
import Chat from "../public/images/icons/Chat.svg"
import BG from "../public/images/firstHeroBg.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="relative px-2 mobile:px-4 py-2.5 z-30 sticky top-0 bg-white ">
        <div className="container flex flex-wrap justify-between items-center mx-auto mt-5">
          <a href="#" className="">
            <Image src={Logo} width="130" height="22" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm tablet:ml-auto text-gray-500 rounded-lg laptop:hidden hover:bg-brand focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className=" w-full md:block md:w-auto z-30" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div>
            <ul className="hidden laptop:flex space-x-6 font-normal">
              <a href="#" className="hover:text-brand text-xl">
                <li>About Us</li>
              </a>
              <a href="#" className="hover:text-brand text-xl">
                <li>Services</li>
              </a>
              <a href="#" className="hover:text-brand text-xl">
                <li>Work</li>
              </a>
              <a href="#" className="hover:text-brand text-xl">
                <li>News</li>
              </a>
              <a href="#" className="hover:text-brand text-xl">
                <li>Contacts</li>
              </a>
            </ul>
          </div>
          <div className="hidden laptop:flex items-center space-x-4">
            <a className="flex space-x-2" href="#">
              <Image src={Cell} width="40" height="40" alt="Phone" />
              <div>
                <p className="text-left">Call us</p>
                <p>(405)555-0128</p>
              </div>
            </a>
            <a className="flex space-x-2" href="#">
              <Image src={Chat} width="40" height="40" alt="Chat" />
              <div>
                <p className="text-left">Talk to us</p>
                <p>hello@ccreatex.com</p>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
