import { useState } from "react"
import Nav from "./Nav"


export default function Crew({crew}){
    const [crewIndex , setCrewIndex] = useState(0)
    const getImage = ()=>{
        return new URL(crew[crewIndex].images.webp , import.meta.url).href
    }

    const handleSwitchIndex  = (index , e)=>{
        setCrewIndex(index)
        const dot = document.querySelector('.active-dot')
        dot.classList.remove('active-dot')
        dot.classList.add('unactive-dot')

        e.target.classList.remove('unactive-dot')
        e.target.classList.add('active-dot')
    }

    return(
    <div className="min-h-screen bg-cover bg-[url('../assets/crew/background-crew-mobile.jpg')] 
    md:bg-[url('../assets/crew/background-crew-tablet.jpg')]
    lg:bg-[url('../assets/crew/background-crew-desktop.jpg')]">
        <Nav></Nav>
        <div className="w-[90%] mx-auto sm:h-screen md:max-w-[80%]  md:min-h-fit md:mt-10  lg:min-h-fit lg:w-[80%] lg:mt-20">
            <section className="text-white">
                <h1 className="mb-4 text-center uppercase font-BarlowCondensed tracking-widest md:text-left md:text-[1.5rem] md:mb-10 lg:text-left lg:text-[1.5rem] lg:relative lg:top-12"><span className="text-white/[25%] mr-2">02</span> meet your crew</h1>

                <div className="flex flex-col items-center gap-10 md:flex-col-reverse lg:flex-row-reverse lg:items-end lg:justify-between lg:h-[80vh] lg:gap-20 ">
                    {/* Crew Image */}
                    <div className="w-full border-b-solid border-b-2 border-b-grey-dark md:border-none lg:border-none lg:max-w-[420px]"><img className="w-[50%] mx-auto sm:w-auto sm:h-[200px]  lg:w-[90%]" src={crew && getImage()} alt="crew" /></div>

                    {/* Crew Infos */}
                    <div className="text-center flex flex-col gap-6 items-center md:flex-col-reverse  lg:flex-col-reverse lg:items-start lg:justify-center lg:max-w-[700px] lg:h-full lg:gap-10">
                        <div className="flex gap-4  [&>div]:cursor-pointer [&>div]:bg-white [&>div]:h-2 [&>div]:w-2 [&>div]:rounded-xl lg:[&>div]:h-4 lg:[&>div]:w-4">
                            <div className="active-dot" onClick={(e)=>handleSwitchIndex(0 , e)}></div>
                            <div className="unactive-dot" onClick={(e)=>handleSwitchIndex(1 , e)}></div>
                            <div className="unactive-dot" onClick={(e)=>handleSwitchIndex(2 , e)}></div>
                            <div className="unactive-dot" onClick={(e)=>handleSwitchIndex(3 , e)}></div>
                        </div>

                        <div className="font-Bellefair h-[190px]  md:h-[190px] lg:text-left lg:h-[310px]">
                            <h3 className="uppercase text-white/[20%] lg:text-[32px]">{crew && crew[crewIndex].role}</h3>
                            <h2 className="uppercase text-[1.5rem] mb-4  lg:text-[56px]" >{crew && crew[crewIndex].name}</h2>
                            <p className="text-grey-light font-Barlow md:mb-4 max-w-[328px] md:max-w-[450px] lg:text-[18px] lg:max-w-[450px] ">
                                {crew && crew[crewIndex].bio}
                            </p>
                        </div>
                        
                       
                    </div>
                </div>
            </section>   
        </div>
    </div>
    )
}