'use client';

import { motion } from "motion/react";

const InView = () => {
    return(
        <motion.div
            initial={{ background : 'blue' , x: 0 }}
            whileInView={{background : 'yellow' , x: 400}}
            viewport={{margin : '-10px 0px -200px 0px'}}
            transition={ { duration : 1 } } // THESE DO NOT WORK WITH WHILEINVIEW
            className="w-40 h-40 rounded-full"
        >
        </motion.div>
    )
}
export default InView;