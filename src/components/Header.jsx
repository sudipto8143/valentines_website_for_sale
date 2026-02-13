import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center pt-10 px-4"
        >
            {/* floating heart */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-2 text-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
            >
                💗
            </motion.div>

            <p className="text-xs text-vibrant-pink tracking-[0.25em] font-bold uppercase mb-2">
                February 14th
            </p>

            <h1
                className="
                  text-4xl sm:text-5xl md:text-7xl
                  font-custom
                  text-transparent bg-clip-text
                  bg-gradient-to-r from-deep-red to-vibrant-pink
                  drop-shadow-sm
                  pt-3
                "
            >
                Happy Valentine's Day
            </h1>
        </motion.header>
    )
}

export default Header
