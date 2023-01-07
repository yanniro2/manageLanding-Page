import React from 'react'
import close from "../images/icon-close.svg"
function MobileNav({ menuClick })
{
    return (
        <div className="w-screeen h-screen top-0 left-0 right-0 bottom-0 justify-center  items-center fixed  z-[2000] backdrop-blur hidden Mobile:flex Tablet:flex">



            <nav className='w-4/5 h-4/5 bg-White rounded p-5 flex j font-m text-Dark-Blue flex-col items-center justify-evenly capitalize drop-shadow shadow-lg relative'>
                <img src={close} alt="close icon" className='top-[1rem] right-[1rem] absolute cursor-pointer' onClick={menuClick} />
                <a href="#" className='a'>Pricing</a>
                <a href="#" className='a'>Product</a>
                <a href="#" className='a'>About us</a>
                <a href="#" className='a'>Careers</a>
                <a href="#" className='a'>Community</a>
            </nav>
        </div>
    )
}

export default MobileNav
