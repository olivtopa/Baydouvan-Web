"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Detect if it's a touch device, if so we don't need a custom cursor
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor if hovering over clickable elements
            if (
                window.getComputedStyle(target).cursor === 'pointer' || 
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') != null ||
                target.closest('button') != null
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-[#D4AF37] rounded-full point-events-none z-[100] mix-blend-screen shadow-[0_0_10px_#D4AF37]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0 : 1
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.15
                }}
                style={{ pointerEvents: 'none' }}
            />
            {/* Outer Glowing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-[#00A86B] rounded-full z-[99] mix-blend-screen shadow-[0_0_20px_rgba(0,168,107,0.4)]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(0,168,107,0.1)" : "rgba(0,0,0,0)",
                    borderColor: isHovering ? "#D4AF37" : "#00A86B",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.5
                }}
                style={{ pointerEvents: 'none' }}
            />
        </>
    );
}
