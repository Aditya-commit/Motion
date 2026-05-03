'use client';

import { motion } from "motion/react";

const Heading = () => {
    return(
        <motion.h1
            initial={{opacity : 0}}
            animate={{
                opacity : 1,
                transition : { duration : 5 }
            }}>
            Hi how are you doing
        </motion.h1>
    )
}
export default Heading;