"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "@/app/data";
import Menu from "./Menu";
import MenuBtn from "./MenuBtn";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="flex justify-between">
        <nav>
          <ul className="flex">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <MenuBtn menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </header>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <Menu
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
