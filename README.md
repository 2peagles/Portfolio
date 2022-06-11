1. I learned more about react icons how to install them, I had an Issue with the lolospaper icon, I was putting an ** L ** instead of an ** I **
2. UseState/useEffect to get a scroll to top button
       const [showScrollTopButton, setShowScrollTopButton] = useState(false); //set value
          useEffect(( )=> {
            window.addEventListener('scroll', ( )=> {   //addevent listener to know when to show the scroll btn
                if(window.scrollY  > 300) {                       //set the time in which the btn should be shown
                     setShowScrollTopButton(true);         //once the btn passes 300px the buttonn will show
                 } else {
                    setShowScrollTopButton(false);   
                }
            } ) 
         }, [ ]);
              const scrollTop =()=>{                     
                 window.scrollTo({
                top: 0,   
                behavior: 'smooth',
            } );
         };
3. Smooth Scroll was a nightmare I couldn't get anything to work the page was just static no matter what i used 
      REACT-SCROLL SCROLL-TO-ELEMENT, USE REF
      BUT then I learned about HashLink I knew  about BrowserRouter , and the term has was familiar but I just didn't think to use it
      I love HashLink it's so simple easy to understand and works! I ran into a problem I didn't have my index.js wrapped in the BrowserRouter
      so a blank page appeared 'NOOOOOOOOO' , I was so confused what had I don't wrong I looked for answers and found none but then I looked at 
      the console and it said something about the Route and I was confused but I remember when I was going through BrowserRouter I had the same problem
This project took me a day in some change to complete just because I'm not very good with the UI so I went for a simple black and white design with the faints hint of blue/pink

I REALLY ENJOYED THIS I'M SURE IT'S NOT SUPER GOOD LOOKING BUT IT WAS FUN TO BUILD RAN INTO SOME CHALLENGES BUT I FIGURED EVERYTHING OUT 

I CAN'T WAIT TO LEARN MORE THING AND ADDED THEM AS I FEEL : )