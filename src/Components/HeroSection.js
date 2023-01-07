import React from 'react'
import left_img from "../images/illustration-intro.svg"
import bg from "../images/bg-tablet-pattern.svg"
function HeroSection()
{
    return (
        <div className=' section relative overflow-hidden pt-[6rem]'>
            <div className="content z-10 Mobile:flex-col Mobile:text-center Mobile:items-center">
                <div className="left justify-center gap-8 Mobile:order-2 Mobile:items-center">
                    <h1 className='h1'>
                        Bring everyone together to build better products.
                    </h1>
                    <p>  Manage makes it simple for software teams to plan day-to-day
                        tasks while keeping the larger team goals in view.</p>
                    <button className='btn w-[10rem]'> Get Started</button>
                </div>
                <div className="right flex items-center justify-center h-full order-1">
                    <img src={left_img} alt="left hero img" className='w-full h-full object-contain' />


                </div>
            </div>

            <img src={bg} alt="bg img" className='w-screen h-screen object-contain absolute top-[6rem] right-0 translate-x-1/4 -translate-y-1/4 -z-1' />
        </div>
    )
}

export default HeroSection
