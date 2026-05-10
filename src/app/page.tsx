'use client';

import { motion , AnimatePresence } from "motion/react";

import Box from "./components/Box";
import Heading from "./components/Heading";
import InView from "./components/InView";
import UsersList from "./components/UsersList";
import { useState } from "react";
import KeyFrames from "./components/Keyframes";
import Variants from "./components/Variants";
import LayoutAnimation from "./components/layoutAnimation";
import ItemsSelector from "./components/itemsSelector";
import ModalContainer from "./components/Modal";
import AnimatePresenceInDepth from "./components/AnimatePresence";
import CardPopup from "./components/CardPopup";
import ComponentInView from "./components/ComponentInView";
import ScrollProgress from "./components/ScrollProgress";
import ElementScrollPosition from "./components/ElementScrollPosition";
import Navbar from "./components/Navbar";
import Transform from "./components/Transform";
import ScrollImageReveal from "./components/ScrollImageReveal";
import HorizontalScroll from "./components/HorizontalScroll";
import Motion_Config from "./components/Motion_Config";
import Times from "./components/Times";
import VisualDuration from "./components/VisualDuration";
import DragConstraints from "./components/Drag";

const Home = () => {

  const [canViewUsersList , setCanViewUsersList] = useState(false);

  const toggleUserListVisibility = () => setCanViewUsersList(!canViewUsersList);

  return(
    <>
      <Navbar />
      <Heading />
      <Box />
      <InView />
      <div className="flex flex-row h-[400px] items-start">
        <AnimatePresence>
          {canViewUsersList && (
            <UsersList />
          )}
        </AnimatePresence>
        <motion.button initial={{rotate : 180}} animate={{rotate : canViewUsersList ? 0 : 180}} onClick={toggleUserListVisibility}>^</motion.button>
      </div>
      <KeyFrames />
      <Variants />
      <LayoutAnimation />
      <ItemsSelector />
      <ModalContainer />
      <AnimatePresenceInDepth />
      <CardPopup />
      <ComponentInView />
      <ScrollProgress />
      <ElementScrollPosition />
      <Transform />
      <ScrollImageReveal />
      <HorizontalScroll />
      <Motion_Config />
      <Times />
      <VisualDuration />
      <DragConstraints />
    </>
  )
}
export default Home;