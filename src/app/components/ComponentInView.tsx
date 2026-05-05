import { AnimatePresence, motion , useInView } from "motion/react"
import { useRef } from "react"

const ComponentInView = () => {

    const ref = useRef(null);

    const inView = useInView(ref , { margin : "0px 0px -100px 0px" }); // SAME PROPS AS THE whileInView

    return(
        <>
            <div className="h-dvh flex items-end bg-gradient-to-b from-blue-300 to-yellow-400 animate-pulse w-full overflow-hidden">
                <AnimatePresence mode='wait'>
                    {inView
                    ?
                    <motion.h1 key='in-view' initial={{opacity : 0 , y : -20}} animate={{opacity : 1 , y : -10}} exit={{opacity : 0 , y : -20}} className="text-xl text-green-600 font-[500] text-xl font-mono tracking-[1px]">I am in View</motion.h1>
                    :
                    <motion.h1 key='outside-view' initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : -10}} exit={{opacity : 0 , y : 20}} className="text-xl text-gray-600 font-[500] text-xl font-mono tracking-[1px]">I am outside of view</motion.h1>
                    }
                </AnimatePresence>
            </div>
            <div ref={ref} className="w-20 h-20 rounded-xl bg-red-600 m-10"></div>
        </>
    )
}
export default ComponentInView;