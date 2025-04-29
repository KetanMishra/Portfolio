"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useSectionInView } from "@/common/lib/hooks";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleContactClick = (e: React.MouseEvent<HTMLElement>) => {
    smoothScrollTo({ e, id: "contact" });
    setActiveSection("contact");
    setTimeOfLastClick(Date.now());
  };

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        {/* Overlay background */}
        <div className="absolute left-0 top-0 h-screen w-full dark:bg-[#0000007c]" />

        {/* Background video */}
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-10 h-screen w-screen object-cover"
        >
          <source src="/layout.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="container flex flex-col items-center justify-center tracking-wide text-black dark:text-white">
          <div className="relative flex flex-col items-center text-center">
            {/* Main heading */}
            <div className="h-72 w-[280px] text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
              <motion.span
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                className="mb-10 block font-extrabold"
              >
                {/* Hey! */}
              </motion.span>
              <br />
              <TextAnimation delay={1} baseText="I'm Ketan Mishra" />
            </div>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Contact button */}
              <button
                onClick={handleContactClick}
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-darkBg px-7 py-3 text-white outline-none transition hover:bg-lightBeige hover:text-black hover:dark:text-black sm:w-auto"
              >
                <span>Contact me here</span>
              </button>

              {/* Download CV link */}
              <a
                className="borderBlack group flex w-64 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:w-auto"
                href="Ketan_Mishra_CV.pdf"
                download
              >
                <span>Download CV</span>
              </a>

              {/* Social icons */}
              <div className="flex gap-2">
                <a
                  aria-label="LinkedIn Profile"
                  className="borderBlack flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white p-2 text-black transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://www.linkedin.com/in/mishraketan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>

                <a
                  aria-label="GitHub Profile"
                  className="borderBlack flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white p-2 text-gray-700 transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://github.com/KetanMishra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={25}
                    height={25}
                    src="/svgs/github.svg"
                    alt="GitHub icon"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}
