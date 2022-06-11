import React from 'react'
import '../components/Home.css';
import Resume from '../Images/Resume  (1).pdf';
import { HashLink as Link } from 'react-router-hash-link';

export const Home = ( ) => {
  return (
    <div className='body' id='home'>
        <div className=' tracked ttu fw6 f6 '>
        {/* <h4 className='ma2'>HI! I'm a </h4> */}
            <h1 className='ma0'>Front End Developer</h1>
              <hr></hr>
                <p className='ma1'>Building Responsive optimized sites. Specializing with React </p>
                  <ol className='pt3'>
                    <li className='dib mr2 '><a href={Resume} rel="noreferrer" target="_blank" className='link white br-pill ph3 pv2 bg-black hover-blue ttu'>Resume</a></li>
                    <li className='dib mr2'><Link to='#projects' className='link white br-pill ph3 pv2 bg-black hover-blue ttu'>Projects</Link></li>
                  </ol>
            </div>
    </div>
  )
}
