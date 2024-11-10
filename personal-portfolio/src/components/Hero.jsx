"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  delay,
} from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    // console.log(clientX, clientY, x, y);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
    // console.log(innerWidth, innerHeight);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);
  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/person.png"}
              width={400}
              height={400}
              priority={true}
              alt="personImage"
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-green-500"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 3.8 } }}
            >
              Hey dude, 7483122655
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            My Name is Siddaram Mahadev Kusur &
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors ">
            I like Coding😎❤️ & CodingToo😍❤️
          </p>
        </motion.div>
        <div className="flex justify-center gap-8 mt-12 dark:text-white">
          <a
            className="flex justify-center hover:text-yellow-700"
            href="https://www.instagram.com/being___kusur/?next=%2F"
          >
            Insta
          </a>
          <a
            className="flex justify-center hover:text-yellow-700"
            href="https://github.com/Siddaram7483"
          >
            Fb
          </a>
          <a
            className="flex justify-center hover:text-yellow-700"
            href="https://www.linkedin.com/in/siddaram-kusur-b4463b237/"
          >
            LinkdIn
          </a>
          <a
            className="flex justify-center hover:text-yellow-700"
            href="https://www.youtube.com/@KusurSiddaram"
          >
            YT
          </a>
          <a
            className="flex justify-center hover:text-yellow-700"
            href="https://github.com/Siddaram7483"
          >
            GitHub
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl"
        >
          {heroIcons.map((icon, i) => (
            <a
              href="#"
              key={i}
              className="hover:bg-red-400 hover:text-white transition-colors rounded-lg"
            >
              {icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#"
          className=" mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk To Me..
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
