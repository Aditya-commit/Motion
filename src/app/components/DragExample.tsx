import { motion, useMotionValue } from "motion/react"
import { PointerEvent, useRef, useState } from "react"

const DragExample = () => {

    const [dragOffset , setDragOffset ] = useState({ x : 0 , y : 0 }); // DONT USE REACT UPDATES
    const dragX = useMotionValue(0); // USE MOTION VALUE TO PREVENT RE RENDER THRASHING
    const dragY = useMotionValue(0); // USE MOTION VALUE TO PREVENT RE RENDER THRASHING

    const [touchedElement , setTouchedElement] = useState(null);

    const refConstraint = useRef(null);

    const handlePointerDown = (event : PointerEvent<HTMLDivElement>) => setTouchedElement(event.target.dataset['id']);

    const handleOnDrag = (event , info) => {
        console.log(info)
        dragX.set(info.offset.x);
        dragY.set(info.offset.y);
        // setDragOffset(info.offset);
    };

    const handleDragEnd = (event , info) => {
        // setDragOffset({x : 0 , y : 0});
        dragX.set(0);
        dragY.set(0);
    }

    return(
        <div className="h-dvh flex items-center justify-center">
            <motion.div className="h-1/2 w-1/2 bg-[#141a19] rounded grid grid-cols-[max-content_max-content_max-content_max-content] justify-center items-center grid-flow-row auto-rows-max gap-2" ref={refConstraint}>
                {Array.from({length : 10} , (_ , i) => (
                    <motion.div data-id={i} drag dragConstraints={refConstraint} dragElastic={0.1} dragTransition={{bounceDamping : 14}} dragSnapToOrigin onPointerDown={handlePointerDown} onDrag={handleOnDrag} onDragEnd={handleDragEnd} key={i} style={{background : `#${503877 + i * 12345}` , ...(touchedElement == i ? {} : {x : dragX , y : dragY , transitionProperty : 'translate' , transitionDuration : '100ms'})}} className='rounded-full w-[50px] h-[50px]' />
                ))}
            </motion.div>
        </div>
    );
}
export default DragExample;