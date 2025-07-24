import { useScroll, useSpring, useTransform } from 'motion/react'
import React, { use } from 'react'
import { motion } from 'motion/react';

const parallaxBackground = () => {
  const {scrollYProgress}=useScroll();
  const x=useSpring(scrollYProgress,{damping:50});
  const mountain3Y=useTransform(x,[0,0.5],["0%","70%"]);
  const PlanetsX=useTransform(x,[0,0.5],["0%","-20%"]);
  const mountain2Y=useTransform(x,[0,0.5],["0%","30%"]);
  const mountain1Y=useTransform(x,[0,0.5],["0%","0%"])

  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className="relative h-screen overflow-hidden">
           {/* {Background Sky}  */}

        <motion.div className='absolute inset-0 w-full h-screen -z-50'
        style={{
          backgroundImage:"url(\public\assets\sky.jpg)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:mountain3Y
        }}
        />
        {/* {Mountain }  */}
        <motion.div
        className='absolute inset-0 -z-40'
        style={{
          backgroundImage:"url(/assets/mountain-3.png)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:mountain3Y,

        }}
        />
        {/* {Planets} */}
        <motion.div className='absolute inset-0 -z-40'
        style={{
          backgroundImage:"url(/assets/planets.png)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:PlanetsX,

        }}/>
        {/* {Mountain }  */}
        <motion.div 
        className='absolute inset-0 -z-40'
        style={{
          backgroundImage:"url(/assets/mountain-2.png)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:mountain2Y,

        }}/>
        {/* {Mountain }  */}
        <motion.div
        className='absolute inset-0 -z-40'
        style={{
          backgroundImage:"url(/assets/mountain-1.png)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:mountain1Y,

        }}/>
      </div>

    </section>
  )
}

export default parallaxBackground
