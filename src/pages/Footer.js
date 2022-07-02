import React from 'react'
import { FaGithub  } from 'react-icons/fa';
// import { GrContact } from 'react-icons/gr'
import { IoIosPaper } from 'react-icons/io';
import Resume from '../Images/Resume  (1).pdf';

export const Footer = ( ) => {
  return (
    <div className='bg-black' id="footer">
        <footer class="pv4 ph2 ph2-ns tc">
            <a class="link dim black dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://github.com/2peagles" target="_blank"  rel="noreferrer" >
                <FaGithub/>
            </a>
            {/* <a class="link dim black dib br-100 h2 w2 mr3 pa2 bg-near-white ba b--black-10" href="/Contact" target="_blank">
                <GrContact/>
            </a> */}
            <a class="link dim black dib br-100 h2 w2 mr3 pa2 bg-near-white ba b--black-10" href={Resume}rel="noreferrer" target="_blank">
                <IoIosPaper/>
            </a>
        </footer>
    </div>
  )
}

//LINK FOR RESUME AND CONTACT LINK