import { motion } from "motion/react";

const VisualDuration = () => {
    return(
        <motion.div
            className="w-[100px] h-[100px] bg-white rounded-full"
            animate={{ x: 500 }}
            transition={{
                type: "spring",
                bounce: 0.9, // 50% bounciness
                
                // Instead of forcing the entire bounce to finish in 1 second...
                // We let it reach the 500px mark at 1 second, and then naturally bounce afterward!
                visualDuration: 1 
            }}
        />
    )
}
export default VisualDuration;


/*
 Rule of Thumb:
 -------------


Use duration when you are using standard easing curves (easeOut, linear, etc.) or when you absolutely must have an animation completely terminate at an exact millisecond.

Use visualDuration whenever you are using type: "spring". It makes the spring feel beautifully natural while still allowing you to choreograph it alongside other time-based animations.
 */