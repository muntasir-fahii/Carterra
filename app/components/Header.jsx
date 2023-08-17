"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import logo from "../../public/images/cta/logo.png";

import SearchMobile from "./SearchMobile";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(header);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-1" : "bg-transparent shadow-none py-3"
      }  fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div>
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={logo} width={132} height={32} alt="logo" className="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
