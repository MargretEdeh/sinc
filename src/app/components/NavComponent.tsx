'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sinc from "../../../public/sinc.png"
import links, { Link as LinkType } from '../../constants/utils'; // Import the links array and types

function NavComponent() {
  ;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex space-x-4 ">
      {links.map((link: LinkType) => (
        <div className="lg:block hidden" key={link.href}>
          <Link href={link.href} className= ' font-semibold'>
            {link.label}
          </Link>
          
        </div>
      ))}

<div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed z-40 top-0 -left-5 h-full bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 w-3/4 ease-in-out lg:hidden`}
      >
        <div className="p-4">
          <Image src={sinc} alt="Zaaptron logo" width={70} height={70} />
        </div>
        {links.map((link: LinkType) => (
          <div className="flex flex-col w-full px-4 py-4 " key={link.href}>
            <Link href={link.href} className='text-red-main border-b-2 border-red-main'onClick={toggleMenu}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavComponent;
