import { AnimatePresence ,  easeIn,  easeOut,  motion } from "motion/react";
import { useState } from "react";

// VARIANTS ARE BASICALLY USED TO TRIGGER CHILD ELEMENT ANIMATION FROM PARENT ELEMENT

const parent = {
    hidden : {
        transition : { staggerChildren: 0.04 , ease : easeOut }
    },
    show : { 
        transition : { staggerChildren : 0.04 , ease : easeIn},
    }
}

const child = {
    hidden : (index : number) => {
        return { borderRadius : 0 , opacity : 0 , y : -10  - index - 10}
    },
    show : {opacity: 1 , y : 0 , borderRadius : [0 , 8 , 12]},
}

const Variants = () => {

    const [show , setShow] = useState(false);

    const toggle = () => setShow(!show);

    return(
        <div className='flex flex-col items-center'>
            <div className='bg-blue-800 rounded-xl w-[500px] h-[500px]'>
                <div className="flex justify-center">
                    <AnimatePresence mode="wait">
                        {show
                        ?
                        <motion.button layoutId="btn" initial={{scale : 1 , y : 0}} whileTap={{scale : 0.9 , y : 2}} transition={{type : 'spring' , bounce : 0.7}} className="bg-white px-6 py-2 rounded-lg text-black text-[15px]" onClick={toggle}>Hide</motion.button>
                        :
                        <motion.button layoutId="btn" initial={{scale : 1 , y : 0}} whileTap={{scale : 0.9 , y : 2}} transition={{type : 'spring' , bounce : 0.7}} className="bg-white px-6 py-2 rounded-lg text-black text-[15px]" onClick={toggle}>Show</motion.button>
                        }
                    </AnimatePresence>
                </div>
                <motion.ol className='p-3 rounded-lg flex flex-col gap-y-3 items-start' variants={parent} initial='hidden' animate={show ? 'show' : "hidden"}>
                    <motion.li custom={1} variants={child} className='bg-white px-3 py-2 text-black'>Hi how are you doing .I am fine thank you</motion.li>
                    <motion.li custom={2} variants={child} className='bg-white px-3 py-2 text-black'>Nothing much</motion.li>
                    <motion.li custom={3} variants={child} className='bg-white px-3 py-2 text-black'>Same here</motion.li>
                    <motion.li custom={4} variants={child} className='bg-white px-3 py-2 text-black'>Wanna go for a movie tonight</motion.li>
                    <motion.li custom={5} variants={child} className='bg-white px-3 py-2 text-black'>Ok</motion.li>
                    <motion.li custom={6} variants={child} className='bg-white px-3 py-2 text-black'>Then meet me at 7:00 pm</motion.li>
                    <motion.li custom={7} variants={child} className='bg-white px-3 py-2 text-black'>Sure</motion.li>
                </motion.ol>
            </div>
        </div>
    )
}
export default Variants;