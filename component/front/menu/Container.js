import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from 'next/link';
import Image from "next/image";
import Dropdown from "./dropdownDocs";


export default function Container({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/*debut navbar*/}
      <nav className="px-2 shadow-sm fixed w-full z-10  bg-orange-900 align-top">
        {/*  dark:bg-gray-800 */}
        <div className=" container flex w-full">
          <div className="flex items-center h-16 w-full  ">
            <div className="flex items-center  mx-auto  justify-between w-full mr-8">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <a className="flex items-center">
                  {/* <Image
                      src={logo}
                      className="mr-3 h-6 sm:h-10"
                      alt="RegVak Logo"
                    /> */}
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Intra<span className="text-orange-600">vak</span>
                  </span>
                </a>
              </div>
              <div className="hidden lg:block flex-shrink-2">
                <div>
                  <div className="ml-9 flex items-baseline space-x-4">
                    <Link
                      href={'/'}
                      activeClass="Accueil"
                      to="documentation"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-white font-medium px-3 py-2 text-md hover:font-black"
                    >
                      <div className="text-white">Accueil</div>
                      
                    </Link>
                   <Dropdown title='Documentation'></Dropdown>
                    <Link
                      href={'/agenda'}
                      activeClass="pgm"
                      to="pgm"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:p-0 lg:p-1 md:dark:text-white hover:text-orange-500"
                    ><div className="text-white cursor-pointer">Programme de la semaine</div>
                      
                    </Link>

                    <Link
                      href={'/personnel'}
                      activeClass="pers"
                      to="work"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:p-0 md:dark:text-white hover:text-orange-500"
                    ><div className="text-white cursor-pointer">Personnel et congés</div>
                      
                    </Link>
                  </div>
                </div>
              </div>
                    &nbsp;
              <div className=" space-x-5 absolute top-2.5 right-2 hidden md:block ml-1">
                <div className="flex flex-row  w-20  items-center  cursor-pointer  md:bg-white md:p-0  hover:text-orange-500  font-semibold text-orange-900  rounded-lg ">
                  <svg
                    
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
                    />
                  </svg>{" "}
                  &nbsp;
                  <Link
                    href={'/backoffice'}
                    activeClass="profile"
                    to="profile"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Profil
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile @ izay eto */}
            <div className="mr-10  lg:hidden sm:z-0 md:z-40  block sm:block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" bg-orange-900 inline-flex items-center justify-center  p-2 rounded-md text-white  hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-900 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Ouvrir menu principal</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden block" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href={'/'}
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Accueil
                </Link>
               <Dropdown title="Documentation"></Dropdown>

                <Link
                  href={'/agenda'}
                  activeClass="progSem"
                  to="progSem"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Programme de la semaine
                </Link>
                <Link
                  href={'/personnel'}
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Personnel et congés
                </Link>
                <div className="inline-flex">
                <svg
                    
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
                    />
                  </svg>{" "}
                  &nbsp;

                  <Link
                  href={'/backoffice'}
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-orange-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profil
                </Link>
                </div>               
              {/* asiana searchbar ve  sa atao any @ accueil*/}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* //fin navbar */}
      {children}
      {/*  //footer */}
    </>
  );
}
