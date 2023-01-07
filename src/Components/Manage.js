import React from 'react'
import bg from "../images/bg-tablet-pattern.svg"
function Manage()
{
    const task = [
        {

            id: "01",
            h1: "Track company- wide progress",
            text: "See how your day - to - day tasks fit into the wider vision.Go from  tracking progress at the milestone level all the way done to the  smallest of details.Never lose sight of the bigger picture again.",
        }, {
            id: "02",
            h1: "Advanced built -in reports",
            text: "Set internal delivery estimates and track progress toward company goals.Our customisable dashboard helps you build out the reports  you need to keep key stakeholders informed.",
        },
        {
            id: "03",
            h1: "Everything you need in one place",
            text: " Stop jumping from one service to another to communicate, store files,track tasks and share documents.Manage offers an all -in -one team productivity solution.",
        }
    ];

    const Task = () => task.map(data =>
    {
        return (
            <div className="box flex gap-5 animate__animated animate__rotateInDownRight" key={data.id} >
                <div className="number bg-Bright-Red rounded-full h-[3rem] flex items-center justify-center w-[15rem] text-White font-l drop-shadow Mobile:hidden">
                    {data.id}

                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='h1 text-[1rem] h-[3rem] flex items-center bg-Very-Pale-Red gap-5'>
                        <p className='px-6 py-3 bg-Bright-Red rounded-full text-White hidden Mobile:block'>{data.id}</p>

                        {data.h1}</h1>
                    <p>{data.text}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='section overflow-hidden relative'>
            <div className="content p-5 gap-[2rem] z-10 Mobile:flex-col">
                <div className="left gap-3 items-start justify-start h-full Mobile:text-center animate__animated animate__rotateInDownLeft">
                    <h1 className='h1 text-[2rem]'>
                        What’s different about Manage?
                    </h1>
                    <p>
                        Manage provides all the functionality your team needs, without
                        the complexity. Our software is tailor-made for modern digital
                        product teams.
                    </p>
                </div>
                <div className="right flex flex-col gap-3 justify-between  h-full">

                    <Task />
                </div>
            </div>
            <img src={bg} alt="bg img" className='w-screen h-screen object-contain absolute bottom-0 left-0 -z-1 rotate-180 -translate-x-1/2 translate-y-1/2' />
        </div>
    )
}

export default Manage
