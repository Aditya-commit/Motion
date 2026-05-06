import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const IMAGE_URLS = ['1' , '2' , '3' , '4' , '5' , '6'];

const HorizontalScroll = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target : ref,
        offset : ['start start' , 'end end']
    });

    const x = useTransform(scrollYProgress , [0 , 1] , ['0%' , '-500%']);

    return(
        <div className='flex justify-center h-[450vh] w-full' ref={ref}>
            <div className='flex flex-row sticky top-[12%] w-[600px] h-[600px] overflow-hidden bg-white'>
                {IMAGE_URLS.map(url => (
                    <motion.div className="flex-shrink-0 w-[600px] h-[600px] bg-white" style={{x}}>
                        <img
                            src={`/images/scrollTransform/${url}.jpg`}
                            className="w-full h-full object-cover"
                            alt=''
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default HorizontalScroll;