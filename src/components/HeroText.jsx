import React from 'react'
import { FlipWords } from './Flipword'
import {motion} from "framer-motion"
const HeroText = () => {
    const words=["Secure","Modern","Scalable"]
    const variants={
        hidden:{ opacity: 0 ,x:-50},
        visible:{opacity:1,x:0},
    }
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* Desktop View */}
      <div className='flex-col hidden md:flex c-space'>
        <motion.h1 className="text-2xl font-medium"
        initial="hidden" 
        animate="visible"
        transition={{delay:1}}>Hi I'm Prerna....!</motion.h1>
      <div className='flex flex-col items-start'>
        <motion.p className="text-5xl font-medium text-neutral-300"
         initial="hidden" 
        animate="visible"
        transition={{delay:1}}>A Developer <br />Dedicated to crafting</motion.p>
        <motion.div
         initial="hidden" 
        animate="visible"
        transition={{delay:1}}>
            <FlipWords words={["Secure","Modern","Scalable"]} className='font-black text-white text-2xl'/>
        </motion.div>
        <motion.p className="text-4xl font-medium text-neutral-300"
         initial="hidden" 
        animate="visible"
        transition={{delay:1}}
        >Web Solutions</motion.p>
      </div>
        </div>
    {/* {Mobile View} */}
    <div className="flex-flex-col space-y-6 md:hidden">
         <motion.p className="text-4xl font-medium"
         variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >Hi, I'm Prerna</motion.p>
        <div>
            
            <motion.p className='text-5xl font-black text-neutral-300' variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
            
            >Building</motion.p>
            <motion.div  variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}> <FlipWords words={["Secure","Modern","Scalable"]} className='font-bold text-white text-3xl'/></motion.div>
            <motion.p className='text-4xl font-black text-neutral-300' variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
            >Web Application</motion.p>
        </div>
    </div>
 </div>
  )
}

export default HeroText
