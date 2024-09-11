'use client'

import { useState, useEffect } from "react";
import { WhatsApp } from "../svgs/whatsApp";

const WhatsAppScroll = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowButton(true);
      } else {
        // Scrolling up
        setShowButton(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`fixed z-40 top-[90%] right-0 transition-transform duration-300 ${showButton ? "translate-x-0" : "translate-x-full"}`}>
      <WhatsApp className="mr-2" />
    </div>
  );
};

export default WhatsAppScroll;
