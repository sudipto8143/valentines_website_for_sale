
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ValentineProposal = ({ onAccept }) => {
    const [noCount, setNoCount] = useState(0);

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Last chance!",
            "Surely not?",
            "You might regret this!",
            "Give it another thought!",
            "Are you absolutely certain?",
            "This could be a mistake!",
            "Have a heart!",
            "Don't be so cold!",
            "Change of heart?",
            "Wouldn't you reconsider?",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-bg-cream overflow-hidden relative">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10 text-center"
            >
                <img
                    src="https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif"
                    alt="Cute Bear"
                    className="h-[200px] mx-auto mb-8"
                />

                <h1 className="text-4xl md:text-6xl font-custom text-deep-red mb-8 drop-shadow-sm">
                    Will you be my Valentine?
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button
                        className="bg-vibrant-pink text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-deep-red transition-all duration-300 transform hover:scale-105"
                        style={{ fontSize: `${noCount * 20 + 16}px` }}
                        onClick={onAccept}
                    >
                        Yes
                    </button>

                    <button
                        className="bg-white text-vibrant-pink font-bold py-3 px-6 rounded-full border-2 border-vibrant-pink shadow-lg hover:bg-gray-100 transition-all duration-300"
                        onClick={handleNoClick}
                    >
                        {getNoButtonText()}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ValentineProposal;
