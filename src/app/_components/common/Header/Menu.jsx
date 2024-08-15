"use client";
import Link from "next/link";
import { navLinks } from "@/app/data";
import { motion } from "framer-motion";
import { opacity } from "./anim";
export default function Menu() {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-padding fixed z-50 flex  h-svh w-screen flex-col bg-[#000] lg:hidden"
    >
      <nav>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
}
