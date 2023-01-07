import React from 'react'
import logo from "../images/logo.svg"
import social_1 from "../images/icon-facebook.svg";
import social_2 from "../images/icon-instagram.svg";
import social_3 from "../images/icon-pinterest.svg";
import social_4 from "../images/icon-twitter.svg";
import social_5 from "../images/icon-youtube.svg";
function Footer()
{
    return (
        <div className='h-[12rem] w-screen bg-Very-Dark-Blue justify-center items-center flex  pt-9 flex-col Mobile:h-full Mobile:gap-5'>
            <div className="content flex justify-between h-full Mobile:flex-col Mobile:h-full Mobile:gap-5">

                {/* LOGo */}
                <div className='flex flex-col justify-between h-full Mobile:order-2 Mobile:w-full Mobile:justify-center Mobile:items-center Mobile:gap-5 order-first'>
                    <div className="logo Mobile:w-full Mobile:flex Mobile:justify-center Mobile:items-center">
                        <img src={logo} alt="logo img" className='Mobile:min-w-max Mobile:h-full Mobile:object-contain ' />
                    </div>

                    <div className="social flex gap-3 Mobile:w-full Mobile:justify-evenly Mobile:items-center">
                        <a href="#" target="_blank" rel="noopener noreferrer" className='i'><img src={social_1} alt="social icon" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='i'><img src={social_2} alt="social icon" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='i'><img src={social_3} alt="social icon" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='i'><img src={social_4} alt="social icon" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='i'><img src={social_5} alt="social icon" /></a>

                    </div>
                </div>
                {/* input */}
                <div className='Mobile:order-first Mobile:w-full flex Mobile:items-center gap-5 order-last  h-full flex-col justify-between'>
                    <div className='w-full flex gap-5'>
                        <div className='w-full flex flex-col gap-3'>
                            <input type="email" name="email" id="email" placeholder='Update in your inbox .....' className="outline-none py-3 px-6 rounded-full Mobile:w-full peer invalid:text-Bright-Red" />

                            <p className="text-Bright-Red hidden peer-invalid:block italic text-[12px] pl-5">please insert a valid email</p>
                        </div>

                        <button className="btn h-[3rem]">Go</button>
                    </div>

                    <p className=" text-Dark-Grayish-Blue Mobile:hidden">Copyright 2023. All Rights Reserved</p>
                </div>

                {/* Nav */}
                <div className="Mobile:order-1 Mobile:w-full flex Mobile:justify-evenly order-1 justify-evenly w-1/2 h-full">
                    <div className='flex  flex-col text-Vary-Light-Gray font-n capitalize h-full justify-between Mobile:justify-center Mobile:gap-5'>
                        <a href="#" className='a2'> Home</a>
                        <a href="#" className='a2'> Pricing</a>
                        <a href="#" className='a2'> Product</a>
                        <a href="#" className='a2'> About us</a>

                    </div>

                    <div className='flex  flex-col text-Vary-Light-Gray font-n capitalize gap-2 h-full Mobile:justify-center Mobile:gap-5'>
                        <a href="#" className='a2'> Careers</a>
                        <a href="#" className='a2'> community</a>
                        <a href="#" className='a2'> Privacy Policy</a>
                    </div>
                </div>
                <div className=' justify-between h-full flex-col order-last hidden Mobile:flex'>

                    <p className=" text-Dark-Grayish-Blue">Copyright 2023. All Rights Reserved</p>
                </div>

            </div>

            <p>Code by <a href="https://github.com/yanniro2" target="_blank" rel="noopener noreferrer">n12oyan</a> </p>


        </div>
    )
}

export default Footer
