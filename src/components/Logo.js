import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center rounded-full h-16 w-16 bg-gray-800 text-white font-bold mt-2'>
        <MotionLink href='/' className='w-16 h-16 bg-dark text-light flex items-center 
        justify-center rounded-full text-2xl font-bold'
        whileHover={{
            scale: 1.3,
            transition: {duration:1, repeat: Infinity}
        }}
        >M T</MotionLink>
    </div>
  )
}

export default Logo