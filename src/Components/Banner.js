import React from 'react'
import bg from "../images/bg-simplify-section-desktop.svg"
function Banner()
{
    return (
        <div className='h-[8rem] w-screen bg-Bright-Red justify-center items-center flex relative Mobile:h-[50vh]'>
            <div className="content flex justify-between z-[100] Mobile:flex-col Mobile:text-center Mobile:justify-center Mobile:items-center gap-8">
                <div className=" flex items-start justify-center Mobile:items-center"> <h1 className='h1 text-[2rem] text-White'>Simplify how your team works today.
                </h1></div>
                <div className=" flex items-end justify-center Mobile:items-center">
                    <button className='btn w-[10rem] bg-White text-Bright-Red cursor-pointer hover:text-White'>Get Started</button>
                </div>

            </div>
            <img src={bg} alt="bg img" className=' absolute w-full h-full object-cover -z-1' />
        </div>
    )
}

export default Banner
