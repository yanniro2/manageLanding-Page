import React from 'react'
import img_1 from "../images/avatar-ali.png"
import img_2 from "../images/avatar-anisha.png"
import img_3 from "../images/avatar-richard.png"
function Testimonial()
{
    const task = [
        {

            id: "01",
            img: img_1,
            name: "Anisha Li",
            text: "SManage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
        }, {
            id: "02",
            name: " Ali Bravo",
            img: img_2,
            text: "We have been able to cancel so many other subscriptions since using   Manage.There is no more cross- channel confusion and everyone is much   more focused.",
        },
        {
            id: "03",
            img: img_3,
            name: "Richard Watts",
            text: "Manage allows us to provide structure and process.It keeps us organized   and focused.I can’t stop recommending them to everyone I talk to!",
        }
    ];

    const Users = () => task.map(data =>
    {
        return (
            <div className="flex flex-col items-center gap-3 " key={data.id} >
                <img src={data.img} alt=" user img" className='w-[4rem] h-[4rem]' />
                <h1 className='h1 text-[1rem] h-[3rem] flex items-center'>{data.name}</h1>
                <p className='text-center'> {data.text}</p>
            </div>
        )
    })
    return (
        <div className='section'>
            <div className="content  items-center flex-col justify-evenly">
                <h1 className='h1 text-[2rem]'>What they've said</h1>

                <div className="box flex gap-5 Mobile:flex-col">
                    <Users />
                </div>
                <button className='btn my-[2rem]'>Get started</button>
            </div>

        </div>
    )
}

export default Testimonial
