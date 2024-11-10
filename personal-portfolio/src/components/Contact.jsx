"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="h-screen py-20 lg:h-auto lg:py-40 ">
      <Heading text={"Get In Touch"} />
      <div className="h-full w-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.gif"}
            alt="ContactImage"
            height={400}
            width={400}
            priority
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            className=" max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder=" Email me for Your all Queries, Talk or Contact-kusursiddaram@gmail.com"
            rows={4}
          />
          <input
            type="submit"
            className=" bg-yellow-500 text-white rounded-md py-2 hover:bg-green-800 cursor-pointer font-light tracking-wider transition-colors"
            value="Send Message"
            onClick={() =>
              (window.location.href =
                "mailto:kusursiddaram@gmail.com?subject=Contact Form Message&body=Your message here...")
            }
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;