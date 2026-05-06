import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const IMAGE_URLS = ['1' , '2' , '3' , '4' , '5' , '6'];

const ImageCard = ({url} : { url : string }) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target : ref,
        offset : ['start end' , 'start start']
    });

    const clipPath = useTransform(scrollYProgress , [0 , 1] , ['inset(0% 50% 0% 50%)' , 'inset(0% 0% 0% 0%)']);

    return(
        <div className='w-1/2 aspect-square overflow-hidden' ref={ref}>
            <motion.div className='w-full h-full relative overflow-hidden' style={{ clipPath }}>
                <Image src={`/images/scrollTransform/${url}.jpg`} fill className="absolute w-full h-full object-cover" alt='' />
            </motion.div>
        </div>
    )
}


const ScrollImageReveal = () => {
    return(
        <div className='flex justify-center w-full'>
            <div className="flex flex-col gap-y-10 w-full items-center">
                {IMAGE_URLS.map(url => <ImageCard key={url} url={url} />)}
            </div>
        </div>
    )
}

export default ScrollImageReveal;