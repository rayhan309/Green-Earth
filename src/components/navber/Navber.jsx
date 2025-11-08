import { TableOfContents, X } from "lucide-react";
import { useState } from "react";

const Navber = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="bg-[#15803D]">
            <nav className="flex justify-between container mx-auto items-center px-5 inter shadow-xl py-3.5">
                <span onClick={() => setOpen(!open)} className="flex gap-2 items-center">
                    {
                        open ? <X className="block md:hidden pt-2 text-white"></X> : <TableOfContents className="block md:hidden text-white"></TableOfContents>
                    }
                    <h2 className="text-2xl text-white font-bold">Green Earth</h2>
                </span>

                <ul className={`absolute -top-40 bg-[#0ec050] p-2 duration-1000 rounded-md z-40 md:hidden ${open && 'top-14'}`}>
                    <li className="text-white mt-2 font-normal"><a href="/About">About</a></li>
                    <li className="text-white mt-2 font-normal"><a href="/Gallery">Gallery</a></li>
                    <li className="text-white mt-2 font-normal"><a href="/contact">Plant a Tree</a></li>
                </ul>

                <div className="hidden md:block">
                    <ul className="flex gap-5">
                        <li className="text-white font-medium"><a href="/About">About</a></li>
                        <li className="text-white font-medium"><a href="/Gallery">Gallery</a></li>
                        <li className="text-white font-medium"><a href="/Plant a Tree">Plant a Tree</a></li>
                    </ul>
                </div>

                <button className="text-[#15803D] font-medium bg-[#FACC15] py-2 px-4 rounded-4xl">Plant a Tree</button>
            </nav>
        </div>
    );
};

export default Navber;