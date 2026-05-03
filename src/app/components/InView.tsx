'use client';

import { motion } from "motion/react";

const InView = () => {
    return(
        <div>
            <div className="h-screen" />
            <motion.div
                initial={{ background : 'blue' , x: 400 }}
                whileInView={{background : 'yellow' , x: 0}}
                transition={ { duration : 15 } } // THESE DO NOT WORK WITH WHILEINVIEW
                className="w-40 h-40 rounded-full"
            >
            </motion.div>
        </div>
    )
}
export default InView;