import { Fragment, useState } from "react";
import { AnimatePresence, easeOut, LayoutGroup, motion } from "motion/react";

const parent = {
    initial : {
        transition : {
            staggerChildren : 0.04
        }
    },
    animate : {
        transition : {
            staggerChildren : 0.04
        }
    }
}

const child = {
    initial : (index : number) => {
        return {
            opacity : 0,
            y : 100 - (index),
            borderRadius : 0
        }
    },
    animate : {
        opacity : 1,
        y : 0,
        borderRadius : 13
    }
}

const Modal = ({index , closeModal} : { index : number , closeModal : () => void;}) => {
    return(
        <div className='fixed top-0 left-0 w-full h-dvh flex items-center justify-center z-10'>
            <motion.div className='bg-white w-[400px] h-[400px] flex items-center justify-center' layoutId={index.toString()} whileTap={{scale : 0.93}} initial={{borderRadius : 0}} animate={{borderRadius : 83}} exit={{ borderRadius : 13}} transition={{ease : easeOut}} onClick={closeModal}>
                <span className='text-black text-xl font-[500]'>{index}</span>
            </motion.div>
        </div>
    );
}

const ModalContainer = () => {

    const [mIndex , setMIndex] = useState<number|null>(null);

    const closeModal = () => setMIndex(null);

    return(
        <LayoutGroup>
            <AnimatePresence>
                {mIndex !== null && (
                    <Modal index={mIndex} closeModal={closeModal} />
                )}
            </AnimatePresence>
            <div className={`${mIndex !== null ? 'brightness-[0.5]' : ''} h-dvh flex justify-center`}>
                <motion.ol
                    className='grid grid-cols-1 min-[900px]:grid-cols-2 gap-4'
                    variants={parent}
                    initial='initial'
                    animate='animate'
                >
                    {Array.from({length : 10} , (_ , index) => (
                        <Fragment key={index}>
                            <motion.li
                                variants={child}
                                custom={index + 1}
                                className="w-[400px] h-[100px]"
                                onClick={()=>setMIndex(index)}
                            >
                                {index !== mIndex && (
                                    <motion.div className="w-[400px] h-[100px] bg-white flex items-center justify-center text-black text-xl" style={{borderRadius : 13}} layoutId={index.toString()}>
                                        {index}
                                    </motion.div>
                                )}
                            </motion.li>
                        </Fragment>
                    ))}
                </motion.ol>
            </div>
        </LayoutGroup>
    )
}
export default ModalContainer;