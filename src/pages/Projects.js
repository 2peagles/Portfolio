import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import Cake from '../Images/Cake.png';

export const Projects = ( ) => {
  return (
      <div  className="pt5 pb7 mt7 bg-black">
        <h1 className='black ma5 tc garamond b tracked br3 bg-white'>Projects</h1>
            <div className=' flex flex-wrap tc ttu'>
                <article class="br2 ba white b-black mv4 w-100 w-50-m w-25-l mw6 center grow pa1 bg-black"> {/* change mw6 */}
                    <img src={Cake} class="db w-100 br2 br--top pointer pb2 " alt="cake"/>
                        <div class="pa2 ph3-ns pb3-ns ">
                            <div class="dt w-100 mt1">
                                <div class="dtc">
                                     <h1 class="f5 f4-ns mv0 white">Landing Page</h1>
                                </div>
                            </div>
                                <p class="f6  mt2 white ma0">
                            If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                            and touch water with paw then recoil in horror.
                                </p>
                        </div>
                            <p className='ma0 ttc tc b'>Tools Used</p>
                                <div className='pa2 ma4 br2 bg-white black '>
                                     <a class="link dim white dib br-100 h2 w2 mr3 pa2 bg-black ba b-black" href="https://github.com/2peagles/cupcake" target="_blank" rel="noreferrer" title="">
                                        <FaGithub/>
                                    </a>
                                        <FaReact/>
                                </div>
                </article>  
                <article class="br2 ba white b--white mv4 w-100 w-50-m w-25-l mw6 center grow pa1">
                    <img src={Cake} class="db w-100 br2 br--top pointer pb2" alt="cake"/>
                        <div class="pa2 ph3-ns pb3-ns ">
                            <div class="dt w-100 mt1">
                                <div class="dtc">
                                    <h1 class="f5 f4-ns mv0 white">Landing Page</h1>
                                </div>
                            </div>
                                <p class="f6 lh-copy measure mt2 white ma0">
                            If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                            and touch water with paw then recoil in horror.
                                </p>
                            </div>
                                <p className='ma0 ttc tc b'>Tools used</p>
                                    <div className='pa2 ma4 tc br2 bg-white black'>
                                        <a class="link dim white dib br-100 h2 w2 mr3 pa2 bg-black ba b-black" href="/" title="">
                                            <FaGithub/>
                                        </a>
                                    <FaReact/>
                                </div>
                </article>  
                <article class="br2 ba white b--white mv4 w-100 w-50-m w-25-l mw6 center grow pa1">
                    <img src={Cake} class="db w-100 br2 br--top pointer pb2" alt="cake"/>
                        <div class="pa2 ph3-ns pb3-ns ">
                         <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0 tc white">Landing Page</h1>
                            </div>
                            </div>
                                <p class="f6  mt2 white ma0">
                            If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                            and touch water with paw then recoil in horror.
                                </p>
                            </div>
                                <p className='ma0 ttc tc b'>Tools used</p>
                                    <div className='pa2 ma4 br2 bg-white black'>
                                        <a class="link dim white dib br-100 h2 w2 mr3 pa2 bg-black ba b-black" href="/" title="">
                                            <FaGithub/>
                                        </a>
                            <FaReact/>
                        </div>
                    </article>  
                </div>
             </div>
  )
}
//GOES IN A TRIANGE WITH ONE SLIDESHOW ONCE MORE CONTENT IS ADDED