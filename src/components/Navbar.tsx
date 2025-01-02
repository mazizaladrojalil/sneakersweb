"use client";
import Menu from "./Menu";
import "./Navbar.css"
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);

    const dropDown = {
        hidden: {
            opacity: 0, y:-10,
            transition: {
                ease: ["easeIn", "easeOut"], duration: 0.2,
            }
        },
        show: {
            opacity: 1, y: 0,
        },
        exit: {
            opacity: 0, y: -10
        }
    }


    return (
        <nav className="bg-dot-mask bg-dot-mask text-white sticky top-0 z-50 backdrop-filter backdrop-blur-lg border-inherit ">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">Logo</div>
          

          {/* Hamburger */}
          <label className="lg:hidden hamburger">
            <input type="checkbox" onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <svg viewBox="0 0 32 32">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
            </svg>
            </label>
          <ul className="hidden lg:flex space-x-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><button 
                onClick={() => setIsDropdown(!isDropdown)}
            >Products</button></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
          <div className="flex space-x-2">
          <div className="search-bar">
                <input  className="checkboxSearch" type="checkbox"/> 
                <div className="mainbox">
                    <div className="iconContainer">
                        <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                    </div>
                    <input className="search_input" placeholder="search" type="text"/>
                </div>
            </div>
            <div className="cart">
                <div className="">
                </div>
            </div>
          </div>  
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <motion.ul className="flex flex-col space-y-4 py-4 px-6" 
                variants={dropDown}
                initial="hidden"
                animate="show">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline"><button onClick={() => setIsDropdown(!isDropdown)}>Products</button></a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </motion.ul>
          </div>
        )}
        {isDropdown && !isMenuOpen &&(
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity:1,
                transition: { ease: ["easeIn", "easeOut"], duration: 0.2,}
              }}
            >
                <motion.div
                variants={dropDown}
                initial="hidden"
                animate="show"
                exit="exit"
                >
                <Menu/>
                </motion.div>
                
            </motion.div>
        )}
      </nav>
    )
}

export default Navbar;