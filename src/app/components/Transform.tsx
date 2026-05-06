import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Transform = () => {

    const box = useRef(null);

    const { scrollYProgress } = useScroll({
        target : box,
        offset : ['start end' , 'start center']
    });

    const opacity = useTransform(scrollYProgress , [0 , 1] , [1 , 0]);

    const borderRadius = useTransform(scrollYProgress , [0 ,1] , [0 , 30]);

    const rotate = useTransform(scrollYProgress , [0 ,1] , [0 , 180]);

    return(
        <>
            <motion.div ref={box} className='bg-red-500 w-[100px] h-[100px] m-4' style={{opacity , borderRadius , rotate}} />
            <div className="h-dvh" />
        </>
    )
}
export default Transform;