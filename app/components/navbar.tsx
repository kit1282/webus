"use client"

import SubNavbar from "./subnavbar";
import { useState } from "react";
import Sidebar from "./SideBar";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
        {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>}
        <div className="p-2">
        <h1 className="text-3xl"></h1>
        </div>

        <div className="min-h-screen">
        <SubNavbar setIsOpen={setIsOpen} />
        <main className="p-2"></main>
        </div>
        </div>
    );
}