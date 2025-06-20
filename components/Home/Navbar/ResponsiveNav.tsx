"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavShow = () => setShowNav(true);
  const handleNavHide = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={handleNavShow} />
      {showNav && <MobileNav closeNav={handleNavHide} />}

    </div>
  );
};

export default ResponsiveNav;
