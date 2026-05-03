import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";

// IF WE WILL NOT USE ANIMATE PRESENCE THEN REACT WILL REMOVE THE ELEMENT FROM DOM IMMEDIATELY AND WE WILL NOT BE ABLE TO SEE ANY EXIT ANIMATION (IF THERE) . IN MOST CASES THIS DOES NOT GIVE LAYOUT SHIFT ISSUE

// IF WE USE ANIMATE PRESENCE WITHOUT MODE='WAIT' AND IF ONE ELEMENT IN MOUNTING AND ONE ELEMENT IS UNMOUNTING THEN BOTH THE ELEMENT AT A POINT EXIST TOGETHER DUE TO WHICH THERE CAN BE LAYOUT SHIFT ISSUE

// IF WE USE ANIMATE PRESENCE WITH MODE='WAIT' THEN IT TELL REACT TO WAIT FOR THE EXITING COMPONENT TO FINISH ITS ANIMATION BEFORE RENDERING THE ELEMENT . THIS DOES NOT CAUSES THE LAYOUTT SHIFT ISSUE BECAUSE THERE IS ONLY ONE ELEMENT AT A TIME

const AnimatePresenceInDepth = () => {

    const [number , setNumber] = useState(0);

    const increaseNumber = () => setNumber(number + 1);

    return(
        <div className='h-[400px] w-full p-10 flex justify-center items-center'>
            <div className='flex justify-center px-10 py-2 rounded-l-sm bg-blue-50 border-2 border-gray-300'>
                <AnimatePresence mode='wait'>
                    <motion.span initial={{y : 20 , opacity : 0}} animate={{y : 0 , opacity :1}} exit={{y : -20 , opacity : 0}} transition={{duration : 0.2 , ease : easeInOut}} key={number} className="text-lg text-black font-mono">{number}</motion.span>
                </AnimatePresence>
            </div>
            <motion.button whileTap={{scale : 0.96 }} transition={{type : 'spring', bounce : 0.6}} className="text-xl px-3 py-[10px] bg-pink-600 rounded-r-sm" onClick={increaseNumber}>+</motion.button>
        </div>
    )
}
export default AnimatePresenceInDepth