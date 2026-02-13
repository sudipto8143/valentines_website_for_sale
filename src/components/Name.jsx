import React from "react"
import { motion } from "framer-motion"

const Name = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-center"
        >
            <h2
                className="
        text-5xl md:text-6xl
        font-name
        text-vibrant-pink
        drop-shadow-[0_0_2px_rgba(255,77,109,0.6)]
        pt-5
      "
            >
                Shreya
            </h2>

            <div className="w-24 h-1 bg-vibrant-pink mx-auto mt-2 rounded-full animate-pulse" />
        </motion.div>
    )
}

export default Name
