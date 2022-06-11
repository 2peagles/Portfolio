import React,{useState, useEffect} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import '../App.css'

export const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(( )=> {
        window.addEventListener('scroll', ( )=> {
        if(window.scrollY  > 300) {
            setShowScrollTopButton(true);
        } else {
            setShowScrollTopButton(false);
        }
    }) 
    }, [ ]);
     
    const scrollTop =()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
        
  return (
    <div>
        { showScrollTopButton && ( 
        <AiOutlineArrowUp 
            onClick={scrollTop} 
            className=' top-btn-position top-btn-style'/>) }
    </div>
  )
}