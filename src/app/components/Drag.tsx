import { motion } from "motion/react";
import { useRef } from "react";

const DragConstraints = () => {

    const refConstraint = useRef(null);

    return(
        <div className='h-dvh flex justify-center items-center'>
            <motion.div className='self-start h-[600px] w-[400px] bg-pink-800' ref={refConstraint}>
                <motion.div
                    drag
                    dragConstraints={refConstraint}
                    dragElastic={0.2}
                    className='bg-pink-500 w-[100px] h-[100px] rounded'
                />
            </motion.div>
        </div>
    )
}
export default DragConstraints;