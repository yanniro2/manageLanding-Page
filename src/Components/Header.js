import React from 'react'
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
function Header({ menuClick })
{
    return (
        <div className='w-full h-[6rem] fixed top-0 left-0 right-0 bg-white drop-shadow-sm shadow-sm flex justify-center font-viet z-[1000] bg-White overflow-hidden animate__animated animate__backInLeft'>

            <div className="content ">
                <div className="logo">
                    <img src={logo} alt="logo img" />
                </div>

                <nav className='flex gap-5 text-Dark-Blue font-n capitalize items-center Mobile:hidden Tablet:hidden'>
                    <a href="#" className='a'> Pricing</a>
                    <a href="#" className='a'>  Product</a>
                    <a href="#" className='a'>  About us</a>
                    <a href="#" className='a'>  Careers</a>
                    <a href="#" className='a'>  community</a>
                </nav>

                <div className='flex items-center justify-center gap-5'>
                    <button className='btn Mobile:hidden'>
                        Get Started
                    </button>

                    <button className='hidden Mobile:block cursor-pointer Tablet:block'>
                        <img src={menu} alt="menu icon" onClick={menuClick} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
