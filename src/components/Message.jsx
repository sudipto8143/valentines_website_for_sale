import React from "react"
import { motion } from "framer-motion"

const Message = () => {
    return (
        <div className="flex items-center justify-center px-4 w-full max-w-xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="
          relative w-full
          p-8 md:p-12
          rounded-3xl
          text-center
          bg-gradient-to-br from-[#fffafb] to-[#ffeef3]
          border border-soft-pink/50
          shadow-xl shadow-pink-200/50
          backdrop-blur-xl
        "
            >
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-2xl">
                    ❤️
                </span>

                <div className="space-y-5">

                    <h3 className="text-2xl md:text-3xl font-custom text-deep-red">
                        My Dearest,
                    </h3>

                    <p className="font-serif text-base  md:text-lg leading-7 text-rose-700/90">
                        Happy Valentine's Day my love, living with you is very peaceful. Thanks for bearing me
                    </p>

                    {/* fixed nested p */}
                    <span className="block text-vibrant-pink text-sm font-semibold tracking-[0.25em] uppercase">
                        I Love You
                    </span>

                    <div className="w-14 h-[1px] bg-vibrant-pink/40 mx-auto" />

                    <p className="text-vibrant-pink text-xs tracking-[0.25em] uppercase">
                        Forever Yours
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Message
