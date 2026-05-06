import { useState } from "react";
import { motion , useMotionValueEvent, useScroll } from "motion/react";

const variants = {
    initial : { opacity : 0 , y : -30 },
    bottom : { opacity : 1 , y : 0 },
    top : { opacity : 0 , y : -30 }
}

const Navbar = () => {

    const [direction , setDirection] = useState('bottom');

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY , 'change' , (latest) => {

        const prevValue = scrollY.getPrevious();

        if(prevValue){
            if(latest > prevValue){
                // ON SCROLLING DOWN
                setDirection('top');
            }
            else{
                setDirection('bottom');
            }
        }
    })

    return(
        <motion.nav variants={variants} initial='initial' animate={direction === 'bottom' ? 'bottom' : 'top'} className='fixed top-0 left-0 w-full z-10 px-10 py-4 backdrop-blur-[14px] flex gap-x-10 justify-end items-center'>
            <li className='text-gray-200 text-[15px] tracking-[1px] hover:text-gray-500 transition-colors duration-300 ease-in-out' style={{listStyle : 'none'}}>Home</li>
            <li className='text-gray-200 text-[15px] tracking-[1px] hover:text-gray-500 transition-colors duration-300 ease-in-out' style={{listStyle : 'none'}}>About Us</li>
            <li className='text-gray-200 text-[15px] tracking-[1px] hover:text-gray-500 transition-colors duration-300 ease-in-out' style={{listStyle : 'none'}}>Services</li>
            <li className='text-gray-200 text-[15px] tracking-[1px] hover:text-gray-500 transition-colors duration-300 ease-in-out' style={{listStyle : 'none'}}>Contact Me</li>
        </motion.nav>
    )
}
export default Navbar;