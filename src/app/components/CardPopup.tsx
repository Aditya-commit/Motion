import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react";

const ITEMS = [
    { name : 'Tomato' , url : '/images/tomato.png' , background : 'red' },
    { name : 'Cheese' , url : '/images/cheese.png' , background : 'yellow' },
    { name : 'Lettuce' , url : '/images/lettuce.png' , background : 'green' },
]

const child = {
    hidden : { x : '50%' , y : 100 , height : 100 , borderRadius : 0 },
    visible : { y : -100 , height : 300 , rotate : 0 , borderRadius : 13 }
};

const CardPopup = () => {

    const scrollRef = useRef(null);

    return(
        <div className="flex items-center justify-center h-dvh">
            <div className='h-[500px] overflow-y-auto space-y-10 px-10 boder border-white rounded-lg' ref={scrollRef}>
                <div className='h-[450px]'></div>
                {ITEMS.map(item => (
                    <div className='h-[300px]' key={item.name}>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{root : scrollRef , margin : "-400px 0px -250px 0px"}}
                            className='w-[400px] h-[200px] overflow-visible rounded-3xl -rotate-[10deg]'
                            style={{background : item.background}}
                        >
                            <motion.div
                                variants={child}
                                transition={{type : 'spring' , bounce : 0.6}}
                                className='relative w-1/2 overflow-hidden bg-white fixed'
                            >
                                <Image src={item.url} fill className="absolute w-full h-full object-contain" alt={item.name} />
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardPopup;