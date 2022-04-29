import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import re from '../assets/images/renurp.png';

const NavBar = () => {
  const [openNav, setOpenNav] = useState (false);
  const handleClick = () => {
    setOpenNav (!openNav);
  };
  return (
    <div>
      <nav className="flex items-center flex-wrap p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image
              alt=""
              src={re}
              width="40"
              height={40}
              className="rounded-full"
            />
            <span className="text-xl text-blue-400 font-bold tracking-wide">
              refinurp
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-blue-500 ml-auto hover:text-blue-700 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${openNav ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center  ">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">
                About us
              </a>
            </Link>
            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">
                Sorry
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
