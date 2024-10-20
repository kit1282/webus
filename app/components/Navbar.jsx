"use client";

import SubNavbar from "./Subnavbar";
import { useState } from "react";
import Sidebar from "./SideBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="p-2">
        <h1 className="text-3xl"></h1>
      </div>

      <div className="h-[110px]">
        <SubNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <main className="p-2"></main>
      </div>
    </div>
  );
}
