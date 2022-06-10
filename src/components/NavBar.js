import React from 'react'
// import Scroll from 'react-scroll';
// import scrollToElement from 'scroll-to-element';

// scrollToElement('.home', {
//   offset: 0,
//   ease: 'out-bounce',
//   duration: 1500
// });
export const NavBar = ( ) => {
  return (
    <div className='bg-black dib flex w-100 justify-between' id="NavBar">
        <nav className='tracked ttu fw6 f6 '>
            <ol className='link pa3 b tr '>
                <li className='dib mr2 '><a href='/' className='link white hover-blue ph2 pv2 '>Home</a></li>
                <li className='dib mr2'><a href='/Projects' className='link white hover-blue ph2 pv2 '>Projects</a></li>
                <li className='dib mr2'><a href='/Contact' className='link black br-pill ph3 pv2 bg-white hover-blue'>Contact</a></li>
            </ol>
        </nav>
    </div>
  )
}
