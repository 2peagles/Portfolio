import React from 'react';
import '../App.css';
import { RiMenu5Line } from 'react-icons/ri';
import { ScrollToTop } from './ScrollToTop';
import {HashLink as Link} from 'react-router-hash-link';

export const NavBar = ( ) => {
  return (
    <div className='bg-black dib flex w-100 justify-between fixed ' id='moblienav'>
      <ScrollToTop/>
      <RiMenu5Line/>
      <nav className='tracked ttu fw6 f6 link pa3 b'>
            <ol className='moblie'>
              <li className='dib mr2 mobile'><Link smooth to='#home' className='link white hover-blue ph2 pv2 pointer active-ba-white'>Home</Link></li>
              <li className='dib mr2 mobile '><Link  smooth to='#projects' className='link white hover-blue ph2 pv2  pointer'>Projects</Link></li>
              <li className='dib mr2 mobile ' ><Link smooth to='#contact'  className='link white hover-blue ph2 pv2 pointer'>Contact</Link></li>
            </ol>
        </nav>
    </div>
  );
}