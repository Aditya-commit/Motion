import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

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
                            key={item.name}
                            layoutId="item-btn"
                            whileTap={{scale : 0.9 , y : 3}}
                            transition={{type : 'spring' , bounce : 0.4}} 
                            className={`flex justify-center gap-x-2 p-3 cursor-pointer border-b ${index === itemIndex ? 'border-white' : 'border-blue-300'}`}
                            onClick={()=>handleItemSelection(index)}
                        >
                            <Image src={item.url} width={30} height={30} alt='' />
                            <span className="text-black font-[500] text-[15px]">{item.name}</span>
                        </motion.button>
                    ))}
                </div>
                <motion.div>

                </motion.div>
            </div>
        </div>
    )
}
export default ItemsSelector;