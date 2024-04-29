import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { IoCloseCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


interface Props{
    isTopOfPage: boolean;
}

const Navbar = ({isTopOfPage}: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair inline-flex gap-2 items-center text-2xl font-bold"><RiMovie2Fill />Movie Mania</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-base font-semibold">
                        <NavLink to='/' className="hover:text-red cursor-pointer">Home</NavLink>
                        <NavLink to='/about' className="hover:text-red cursor-pointer">About</NavLink>
                    </div>
                    
                ) : (
                    <div>
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-circle bg-red btn-primary"><GiHamburgerMenu className="text-white" /></label>
                    </div>
                        
                )}

                {/* MOBILE MENU POPUP */}
                
            </div>
            {!isAboveSmallScreens && (
                    <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                      {/* Page content here */}
                    </div> 
                    <div className="drawer-side">
                      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                      <ul className="menu p-4 w-80 min-h-full bg-softBg text-white text-lg">
                        {/* Sidebar content here */}
                        <h4 className="font-playfair inline-flex gap-2 items-center justify-center text-2xl font-bold"><RiMovie2Fill />Movie Mania</h4>
                        <div className="divider"></div>
                        <li className="w-full"><NavLink to='/' className='btn text-2xl btn-ghost'>Home</NavLink></li>
                        <li><NavLink to='/about' className='btn text-2xl btn-ghost'>About</NavLink></li>
                      </ul>
                    </div>
                  </div>
                )}
        </nav>
    )
}

export default Navbar;