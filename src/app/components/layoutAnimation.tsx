import { useState } from "react";
import { motion } from "motion/react";

// HERE WE DO NOT NEED OT USE ANIMATEPRESENCE SINCE THERE IS NO EXIT ANIMATION TO IT

const LayoutAnimation = () => {

    const [expand , setExpand] = useState(false);

    const toggleExpand = () => setExpand(!expand);

    return(
        <motion.div className={`grid ${expand ? 'grid-cols-[60%_40%]' : 'grid-cols-[100%_0%]'} h-dvh`} layout>
            <motion.div layout='size' className="h-full bg-black">
                {expand
                ?
                <motion.button layout layoutAnchor={{ x : 0.5 , y : 0.5}} className='bg-white rounded-full px-6 py-2 text-black' style={{transform : 'none'}} onClick={toggleExpand}>Contract</motion.button>
                :
                <motion.button layout layoutAnchor={{ x : 0.5 , y : 0.5}} className='bg-white rounded-full px-6 py-2 text-black' style={{transform : 'none'}} onClick={toggleExpand}>Expand</motion.button>
                }
            </motion.div>
            <motion.div layout='size' className='h-full bg-red-500'></motion.div>
        </motion.div>
    )
}
export default LayoutAnimation;