import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const IconsArray = [
    {
      name: "Gmail",
      logo: BiLogoGmail,
      url: "https://www.gmail.com",
    },
    {
      name: "Linkedin",
      logo: IoLogoLinkedin,
      url: "https://www.linkedin.com/swapyshelke",
    },
    {
      name: "Twitter",
      logo: IoLogoTwitter,
      url: "https://www.twitter.com/",
    },
    {
      name: "Github",
      logo: BsGithub,
      url: "https://www.github.com/swapyshelke",
    },
  ];
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I'm Swapnil Shelke",
                  1000,
                  // 'I am a Web Developer',
                  // 1000,
                  // 'I am a UI/UX Designer',
                  // 1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span style={{ WebkitTextStroke: "1px black" }} className="font-extrabold">Fullstack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Based In <span className="font-extrabold">India</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-white text-sm lg:text-base mt-5 home-page-paragraph"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            // whileHover={}
          >
            Passionate about technology, I specialize in Web Development and Web
            Designing. I’m focused on building innovative solutions and
            continuously expanding my skills. My goal is to grow as a developer
            and contribute to impactful projects in the tech industry
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {/* {
            IconsArray.map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="bg-black p-2 lg:p-3 rounded border-2 border-yellow-600"
                whileHover={{ scale: 1.1, backgroundColor: "#000000ff", color: "#fffb00ff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))} */}

            {IconsArray.map((item, index) => {
              const Icon = item.logo; // Assign component
              return (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="bg-black p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000000ff",
                    color: "#ffffffff",
                    borderColor: "white" 
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 hover:color-black" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[52%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            className="h-full w-full"
            src="/assets/sample-header-image.png"
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>
  );
}
