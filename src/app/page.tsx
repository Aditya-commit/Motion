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

const Home = () => {

  const [canViewUsersList , setCanViewUsersList] = useState(false);

  const toggleUserListVisibility = () => setCanViewUsersList(!canViewUsersList);

  return(
    <>
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
    </>
  )
}
export default Home;