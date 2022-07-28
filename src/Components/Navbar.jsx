import React, { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../Assets/Img/common/gym-logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(true);

  useEffect(() => window.innerWidth < 768 ? setOpen(false) : setOpen(true), []);

  return (
    <header className="absolute top-0 left-0 z-10000 bg-transparent py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between w-full">
      <div className="flex md:contents justify-between items-center w-full md:w-fit z-10">
        <img src={Logo} alt="logo" className="w-40 h-16" />
        <button aria-label='navbar toggle' className="md:hidden text-gold" onClick={() => setOpen(prevState => !prevState)}>
          {
            !open ?
              <svg stroke="currentColor" fill="currentColor" className="h-8 w-8" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
              </svg>
              :
              <svg stroke="currentColor" fill="currentColor" className="h-8 w-8" strokeWidth="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
              </svg>
          }
        </button>
      </div>

      <nav className={`absolute top-0 left-0 md:static flex md:contents flex-col justify-center md:[justify-content:unset] items-center md:flex-row w-full md:w-fit h-screen md:h-fit ${!open ? 'hidden' : ''} text-lg text-center text-white font-semibold tracking-widest`}>
        <ul className="flex w-3/5 space-x-16">
          <li>
            Home
          </li>
          <li>
            Destination
          </li>
          <li>
            Blog
          </li>
          <li>
            Contact
          </li>
        </ul>
        <button className="button-primary button py-2 px-6 rounded-sm text-white">
          sign up
        </button>
      </nav>
    </header>
  )
}
