/*
    MotionConfig provies a fallback transition 
    Even the child elements of this element does not have transition property set then they will use the transition property defined in the MotionConfig

    If you want to use the properties defined in the MotionConfig but override some values for that specific element then you can use Inheritance

    Inheritance lets you use the values of MotionConfig propperty that are not defined in that element without entirely replacing the transition object
*/

import { MotionConfig , circOut, easeIn, motion } from "motion/react";

const Motion_Config = () => {
    return(
        <div className="flex flex-col gap-y-3 h-[500px] pt-20">
            <MotionConfig transition={{ duration : 1 , ease : circOut }}>
                <motion.button className="text-3xl text-gray-300 px-3 rounded-lg bg-gray-900 self-center" initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}}>
                    +
                </motion.button>
                <motion.button className="text-3xl text-gray-300 px-4 rounded-lg bg-gray-900 self-center" initial={{y : -10 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{delay : 1 }}>
                    -
                </motion.button>
                <motion.button className="text-3xl text-gray-300 px-4 rounded-lg bg-gray-900 self-center" initial={{y : -200 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{inherit : true , duration : 2}}>
                    *
                </motion.button>
            </MotionConfig>
        </div>
    )
}
export default Motion_Config;