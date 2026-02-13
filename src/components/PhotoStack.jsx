import React, { useState } from "react";
import { motion } from "framer-motion";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";

const photos = [photo1, photo2, photo3];

export default function PhotoGallery() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center ">

      {/* soft dreamy background (very subtle) */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-pink-200/20 via-rose-100/20 to-purple-200/20 blur-3xl rounded-full" />

      <div
        className="flex justify-center items-center h-96 md:w-96 md:h-[32rem] cursor-pointer"
        style={{ perspective: 1600 }}
        onClick={() => setOpen(!open)}
      >
        {photos.map((src, i) => {
          const spreadX = [-190, 0, 190];
          const rotateVals = [-14, 0, 14];

          return (
            <motion.div
              key={i}
              className="
                absolute
                w-64 h-80 md:w-72 md:h-96
                rounded-2xl
                overflow-hidden
                bg-white/40
                backdrop-blur-md
                shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              "
              initial={{ rotate: (i - 1) * 4 }}
              animate={{
                x: open ? spreadX[i] : 0,
                y: open ? -25 : 0,
                rotate: open ? rotateVals[i] : (i - 1) * 4,
                scale: open ? 1 : 0.96 + i * 0.03,
              }}
              whileHover={{
                y: -20,
                scale: 1.06,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              style={{ zIndex: 10 - i }}
            >
              {/* image */}
              <img
                src={src}
                alt=""
                className="
                  w-full h-full
                  object-cover
                  rounded-2xl
                "
              />

              {/* subtle glass overlay (premium look) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/10 pointer-events-none" />
              {/* pinkish tint */}
              <div className="absolute inset-0 bg-vibrant-pink/10 pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
