"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      <Link href="/" className="flex items-center">
  <Image
    src="/images/Jett Jagger.png"
    alt="hero image"
    width={80}
    height={80}
    className="text-white font-semibold md:w-24 md:h-24 lg:w-30 lg:h-30"
  />
</Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
  {navLinks.map((link, index) => (
    <li key={index}>
      <NavLink
        title={link.title}
        href={link.path}
      />
    </li>
  ))}
</ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;