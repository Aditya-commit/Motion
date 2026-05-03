'use client';

import { motion } from "motion/react";

const UsersList = () => {
    return(
        <div className="m-4 flex items-start">
            <motion.ol initial={{height : 0}} animate={{height : 'auto'}} exit={{ height : 0}} className='bg-gray-800 py-3 px-10 rounded-b-lg overflow-hidden flex flex-col gap-y-3'>
                <li>Aditya</li>
                <li>Priya</li>
                <li>Ishu</li>
                <li>Mini</li>
                <li>Shagun</li>
            </motion.ol>
        </div>
    )
}
export default UsersList;