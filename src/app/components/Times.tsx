// TIMES CONTROLS HOW MUCH TIME DIFFERENT KEYFRAMES HAVE TO TAKE TO COMPLETE THEIR PART OF THE ANIMATION FROM THE DURATION

import { motion } from "motion/react"

const Times = () => {
    return(
        <motion.div className='w-42 h-42 bg-red-500 rounded-lg' initial={{x : 0}} animate={{x : [1 , 800 , 0]}} transition={{ times : [0 , 0.3 , 1] , duration : 4}} />
    )
}
export default Times;


/*
    Here is exactly how the math breaks down and how it will look on screen:

    The Timeline Breakdown
    ----------------------

    At 0.0 seconds (0%): The red square starts basically at its original position (x: 1).

    At 1.2 seconds (30% of 4s): The square reaches x: 800.

    At 4.0 seconds (100% of 4s): The square returns to x: 0.
*/