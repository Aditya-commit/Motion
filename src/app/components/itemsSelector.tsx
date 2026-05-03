import Image from "next/image";
import {  useState } from "react";
import { AnimatePresence, easeIn, motion } from "motion/react";

const ITEMS = [
    { name : 'Tomato' , url : '/images/tomato.png' },
    { name : 'Cheese' , url : '/images/cheese.png' },
    { name : 'Lettuce' , url : '/images/lettuce.png' },
]

const ItemsSelector = () => {

    const [itemIndex , setItemIndex] = useState(0);

    const handleItemSelection = (index : number) => setItemIndex(index);

    return(
        <div className='flex items-center justify-center h-dvh bg-black'>
            <div className='w-[600px] h-[350px] bg-white rounded-t-lg rounded-b-xl overflow-hidden'>
                <div className='grid grid-cols-3'>
                    {ITEMS.map((item , index) => (
                        <motion.button
                            key={index}
                            whileTap={{scale : 0.9 , y : 3}}
                            className={`relative flex justify-center gap-x-2 p-3 cursor-pointer`}
                            onClick={()=>handleItemSelection(index)}
                        >
                            <Image src={item.url} width={30} height={30} alt='' className="z-10" />
                            <span className="text-black font-[500] text-[15px] z-10">{item.name}</span>
                            {index === itemIndex ? (
                                <motion.div
                                    layoutId='underline'
                                    transition={{type : 'spring' , bounce : 0.5}}
                                    className="border-b-2 border-blue-300 absolute top-0 left-0 w-full h-full bg-[#eee]"
                                />
                            ) : null }
                        </motion.button>
                    ))}
                </div>
                <div className='h-[85%] w-full flex items-center justify-center'>
                    <AnimatePresence mode='wait'>
                        <motion.div initial={{opacity : 0 , y : 20}} key={ITEMS[itemIndex]['name']} animate={{ opacity : 1 , y : 0}} exit={{opacity : 0 , y : -20}} transition={{duration : 0.3 , ease : easeIn}}>
                            <Image src={ITEMS[itemIndex]['url']} width={100} height={100} alt={ITEMS[itemIndex]['name']} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default ItemsSelector;