import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const LayoutAnimation = () => {

    const [expand , setExpand] = useState(false);

    const toggleExpand = () => setExpand(!expand);

    return(
        <motion.div className={`grid ${expand ? 'grid-cols-[60%_40%]' : 'grid-cols-[100%_0%]'} h-dvh`} layout>
            <motion.div layout='position' className="h-full bg-black">
                {expand
                ?
                <button className='bg-white rounded-full px-6 py-2 text-black' style={{transform : 'none'}} onClick={toggleExpand}>Contract</button>
                :
                <button className='bg-white rounded-full px-6 py-2 text-black' style={{transform : 'none'}} onClick={toggleExpand}>Expand</button>
                }
            </motion.div>
            <motion.div layout='position' className='h-full bg-red-500'></motion.div>
        </motion.div>
    )
}
export default LayoutAnimation;