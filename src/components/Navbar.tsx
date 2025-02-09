"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SocialIcons from "./SocialIcons";
import { scrollTo } from "./util";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navbar fixed z-50 w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-6xl items-center justify-between px-3 py-6"
      >
        <div className="flex lg:flex-1">
          <AnimatedLink id="hero">
            <span className="font-fugaz text-4xl">HK</span>
          </AnimatedLink>
        </div>
        <div className="flex lg:hidden">
          {!mobileMenuOpen && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="hidden text-white lg:flex lg:gap-x-12">
          <AnimatedLink id="experience">Experience</AnimatedLink>
          <AnimatedLink id="projects">Projects</AnimatedLink>
          <AnimatedLink id="resume">Resume</AnimatedLink>
          <AnimatedLink id="contact">Contact</AnimatedLink>
        </div>
        <div className="hidden items-center space-x-5 lg:flex lg:flex-1 lg:justify-end">
          <SocialIcons />
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as={motion.div}
            static
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: -2 }}
              exit={{ x: "100%" }}
              transition={{ type: 'tween', stiffness: 300, damping: 40 }}
              className="bg-navbar sm:ring-accent/50 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1"
            >
              <DialogPanel>
                <div className="flex items-center justify-between">
                  <AnimatedLink id="hero">
                    <a
                      className="font-fugaz text-4xl"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollTo("hero");
                      }}
                    >
                      KD
                    </a>
                  </AnimatedLink>

                  {mobileMenuOpen && (
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-white"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  )}
                </div>
                <div className="mt-6 flow-root">
                  {/* <div className="-my-6 divide-y divide-gray-500/10"> */}
                  <div className="space-y-2 py-6 text-white">
                    <a
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          scrollTo("experience");
                        }, 500); // Adjust this delay as needed
                      }}
                      className="hover:bg-accent/50 -mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    >
                      Experience
                    </a>
                    <a
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                        scrollTo("projects");
                        },500);
                      }}
                      className="hover:bg-accent/50 -mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    >
                      Projects
                    </a>
                    <a
                      onClick={() => {
                        window.open("resume.pdf", "_blank");
                      }}
                      className="hover:bg-accent/50 -mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    >
                      Resume
                    </a>
                    <a
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                        scrollTo("contact");
                        },500);
                      }}
                      className="hover:bg-accent/50 -mx-3 block cursor-pointer rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                    >
                      Contact
                    </a>
                  </div>
                  {/* </div> */}
                </div>
                <div className="absolute bottom-3 left-3 space-x-5">
                  <SocialIcons />
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}

// const UnderLineAnimation = () => {
//   return (
//     <motion.span
//       className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
//       variants={{
//         initial: { scaleX: 0 },
//         hover: { scaleX: 1 },
//       }}
//       transition={{ duration: 0.25, ease: "easeInOut" }}
//     />
//   );
// };

const AnimatedLink = ({ id, children }: { id: string; children: any }) => {
  return (
    <motion.a
      className={`relative cursor-pointer text-sm font-semibold leading-6`}
      whileHover="hover"
      initial="initial"
      style={{ transformStyle: "preserve-3d" }}
      onClick={() =>
        id === "resume" ? window.open("resume.pdf", "_blank") : scrollTo(id)
      }
    >
      {children}
      <motion.span
        className="bg-accent absolute bottom-0 left-0 h-0.5 w-full"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
    </motion.a>
  );
};

// const Logo = ({}) => {
//   return (
//     <div className="font-fugaz">
//       <AnimatedLink
//         href="/"
//         isLogo
//       >
//         <motion.span
//           className="inline-block"
//           variants={{
//             initial: { rotateX: 0 },
//             hover: { rotateX: 180 },
//           }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           KD
//         </motion.span>
//         <motion.span
//           className="absolute inset-0 text-accent flex items-center justify-center "
//           variants={{
//             initial: { rotateX: -180 },
//             hover: { rotateX: 0 },
//           }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           KD
//         </motion.span>
//       </AnimatedLink>
//     </div>
//   );
// };
