'use client';

import { motion } from "motion/react";

const Box = () => {
    return(
        <motion.div
            animate={{x : 400 , rotate : 360 , transition : { duration : 2}}}
            whileHover={{ scale : 1.1 }}
            whileTap={{ scale : 1}}
            whileDrag={{ color : 'red'}}
            className="w-[100px] h-[100px] bg-pink-600 rounded-xl"
        >
        </motion.div>
    )
}
export default Box;