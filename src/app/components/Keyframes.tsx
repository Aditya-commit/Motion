import { motion } from "motion/react";

const KeyFrames = () => {
    return(
        <motion.div
            className='w-52 h-52 bg-blue-500'
            animate={{ scale : [0 , 0.7 , 1.2 , 0.7] , borderRadius : [0 , 10 , 40 , 70 , 100 , 200 , 40 , 10 , 0] , rotate : [0 , 180 , 360 , 180 , 0]}}
            transition={ { duration: 3 }}
        ></motion.div>
    )
}
export default KeyFrames;