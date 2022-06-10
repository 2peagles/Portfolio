import React from 'react'
import '../components/Home.css';

export const Home = ( ) => {
  return (
    <div className='body' id="Home">
        <div className=' tracked ttu fw6 f6 '>
        {/* <h4 className='ma2'>HI! I'm a </h4> */}
            <h1 className='ma0'>Front End Developer</h1>
              <hr></hr>
                <p className='ma1'>To address all issues (including breaking changes), run:To address all issues (including breaking changes), run:</p>
                  <ol className='pt3'>
                    <li className='dib mr2 '><a href='/' className='link white br-pill ph3 pv2 bg-black hover-blue ttu'>Resume</a></li>
                    <li className='dib mr2'><a href='/' className='link white br-pill ph3 pv2 bg-black hover-blue ttu'>Projects</a></li>
                  </ol>
            </div>
    </div>
  )
}
