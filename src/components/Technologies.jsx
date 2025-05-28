import React from 'react'
import { RiJavascriptFill, RiReactjsLine } from 'react-icons/ri'
// import { TbBrandNextjs } from 'react-icons/tb'
import { SiAdobephotoshop, SiFlutter, SiMongodb, SiPython, SiTailwindcss } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaPython } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Technologies = () => {
    const iconVariants = (duration)=>({
        initial:{y:-10},
        animate:{
            y:[10, -10],
            transition:{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                reapeatType:"reverse"
            }
        }
    })
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y: -100}}
           transition={{duration:1.5}}
           className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration:1.5}}
          className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-2'>
                <FaHtml5 className='text-5xl text-blue-800'/>
            </motion.div>
            <motion.div 
              variants={iconVariants(5.5)}
              initial="initial"
              animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-2'>
                <FaCss3Alt className='text-5xl text-red-700'/>
            </motion.div>
            <motion.div 
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-2'>
                <RiJavascriptFill className='text-5xl text-yellow-400'/>
            </motion.div>
            <motion.div 
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-2'>
                <RiReactjsLine className='text-5xl text-cyan-400'/>
            </motion.div>
            <motion.div 
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-2'>
                <FaBootstrap className='text-5xl text-purple-700 '/>
            </motion.div>
            <motion.div 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-2'>
                <SiPython className='text-5xl text-cyan-300 '/>
            </motion.div>
            <motion.div 
              variants={iconVariants(8)}
              initial="initial"
              animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-2'>
                <SiFlutter className='text-5xl text-green-500'/>
            </motion.div>
            <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-2'>
                <FaFigma className='text-5xl text-sky-700'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies