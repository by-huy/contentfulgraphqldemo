"use client";

export default function MenuBtn({ toggleMenu, menuOpen }) {
  return (
    <button
      aria-label="Open Menu Button"
      aria-expanded={menuOpen}
      aria-controls="menu"
      onClick={toggleMenu}
      className=" "
    >
      Menu
    </button>
  );
}
