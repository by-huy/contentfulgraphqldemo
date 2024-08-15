import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
// useMotionValue avoids things from doing unnecessary rerendering --> Switch from useState
import Magnetic from "../utils/Magnetic";

export default function Cursor({ linksRef, videoRef }) {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovered, setIsHovered] = useState(false);

  // Cursor Logic & Tracking
  const cursorSize = isHovered ? 100 : 16;

  //   setting the initial positions of the cursor
  const cursor = {
    y: useMotionValue(0),
    x: useMotionValue(0),
  };

  //   Transition configuration
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 50,
    mass: 0.9,
  };

  const springText = {
    type: "spring",
    stiffness: 400,
    damping: 40,
    mass: 0.3,
  };

  //   Smoothing the mouse cursor when moved
  const smoothMouse = {
    x: useSpring(cursor.x, spring),
    y: useSpring(cursor.y, spring),
  };

  //   Smoothing the mouse cursor when moved
  const smoothText = {
    x: useSpring(cursor.x, springText),
    y: useSpring(cursor.y, springText),
  };

  //   Tracking the cursor
  const trackCursor = (e) => {
    const { clientY, clientX } = e;
    cursor.y.set(clientY - cursorSize / 2);
    cursor.x.set(clientX - cursorSize / 2);
  };

  // Variants to change when hovered
  const variants = {
    default: {
      width: cursorSize,
      height: cursorSize,
    },
    links: {
      width: cursorSize,
      height: cursorSize,
      backgroundColor: "#8C8C73",
    },
  };

  //   Hovering functions
  const linkOver = () => {
    setCursorText("View");
    setCursorVariant("links");
    setIsHovered(true);
  };

  const linkLeave = () => {
    setCursorText("");
    setCursorVariant("default");
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", trackCursor);
    linksRef.current.forEach((link) => {
      if (link) {
        link.addEventListener("mouseover", linkOver);
        link.addEventListener("mouseleave", linkLeave);
      }
    });

    // Cleaning up the listeners after it has unmounted
    return () => {
      window.removeEventListener("mousemove", trackCursor);
      linksRef.current.forEach((link) => {
        if (link) {
          link.removeEventListener("mouseover", linkOver);
          link.removeEventListener("mouseleave", linkLeave);
        }
      });
    };
  });

  return (
    <div>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={spring}
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
        className="hidden sm:block z-[999] w-4 h-4 rounded-full p-5 fixed pointer-events-none justify-center items-center font-semibold text-secondary-400"
      ></motion.div>
      <motion.span
        style={{ left: smoothText.x, top: smoothText.y }}
        transition={springText}
        className="z-[1000] w-[100px] h-[100px] font-semibold justify-center items-center  fixed text-sm pointer-events-none hidden sm:flex"
      >
        <span>{cursorText}</span>
      </motion.span>
    </div>
  );
}
