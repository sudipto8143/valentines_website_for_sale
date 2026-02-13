import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import bgMusic from "../assets/audio/bg-music.mp3"

const MusicPlayer = ({ autoPlay }) => {
    const audioRef = useRef(new Audio(bgMusic))
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        audio.loop = true
        audio.preload = "auto"

        if (autoPlay) {
            audio.play().then(() => setIsPlaying(true)).catch(e => console.log("Autoplay blocked:", e))
        }

        return () => audio.pause()
    }, [autoPlay])

    const togglePlay = () => {
        if (isPlaying) audioRef.current.pause()
        else audioRef.current.play()

        setIsPlaying(!isPlaying)
    }

    return (
        <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={togglePlay}
            className={`
        fixed bottom-6 right-6 z-50
        p-4 rounded-full shadow-lg
        border border-white/60
        backdrop-blur-md
        ${isPlaying ? "bg-vibrant-pink text-white" : "bg-white/80 text-vibrant-pink"}
      `}
        >
            <span className="absolute -top-6 text-[10px] bg-white px-2 rounded-full shadow">
                Music
            </span>

            {isPlaying ? "💗" : "🎵"}
        </motion.button>
    )
}

export default MusicPlayer
