import { useState } from "react";
import Nav from "./Nav";

export default function Destination({destinations}){
    const [destIndex , setDestIndex] = useState(0)
    const getImage = ()=>{
        return new URL('/src'+destinations[destIndex].images.png , import.meta.url).href
    }
    const handleSwitchIndex  = (e , index)=>{
        setDestIndex(index)
        document.querySelector('.selected-dest').classList.remove('selected-dest')
        e.target.classList.add('selected-dest')
        
    }

    return(
    <div className="min-h-screen bg-cover bg-[url('./assets/destination/background-destination-mobile.jpg')] 
    md:bg-[url('./assets/destination/background-destination-tablet.jpg')]
    lg:bg-[url('./assets/destination/background-destination-desktop.jpg')]">        
        <Nav/>
        <div className=" w-[90%] mx-auto md:mt-14 lg:h-[100vh] lg:w-[80%] lg:mt-20">
            

            <section className="text-white flex flex-col gap-6 items-center justify-center lg:flex-row lg:gap-28">
                <div className="w-full flex flex-col gap-6 items-center lg:gap-12">
                    <h1 className="uppercase tracking-widest text-white font-BarlowCondensed text-lg md:self-start lg:self-start lg:text-[1.5rem] md:text-[1.3rem]"><span className="text-white/[25%] mr-2">01</span>pick your destination</h1>
                    <div className="w-[170px] lg:w-[445px]"><img src={destinations && getImage()} alt="" /></div>
                </div>
                
                <div className="w-full flex flex-col gap-6 items-center lg:max-w-[450px] ">
                    <ul className="flex gap-4 uppercase tracking-widest font-BarlowCondensed text-grey-light text-lg [&>li]:cursor-pointer lg:w-full">
                        <li className="selected-dest" onClick={(e)=>handleSwitchIndex(e , 0)}>Moon</li>
                        <li onClick={(e)=>handleSwitchIndex(e , 1)}>Mars</li>
                        <li onClick={(e)=>handleSwitchIndex(e , 2)}>Europa</li>
                        <li onClick={(e)=>handleSwitchIndex(e , 3)}>Titan</li>
                    </ul>

                    <div className="text-center  md:max-w-[500px] lg:text-left lg:pb-8">
                        <h2 className="uppercase text-[3.2rem] leading-tight font-Bellefair  lg:text-[5rem]">{destinations && destinations[destIndex].name}</h2>
                        <p className="font-Barlow text-grey-light lg:text-[18px]">
                            {destinations && destinations[destIndex].description}    
                        </p>
                    </div>


                    <div className="text-center uppercase flex flex-col items-center gap-6 border-solid border-t-[1px] border-[#383B4B] w-full pt-6 
                                    md:flex-row md:justify-center md:gap-20
                                    lg:flex-row lg:gap-20 lg:text-left">
                        <div>
                            <h3 className="font-BarlowCondensed tracking-widest text-grey-light text-[14px]">Avg. distance</h3>
                            <p className="font-Bellefair text-[28px]">{destinations && destinations[destIndex].distance}</p>
                        </div>
                        
                        <div>
                            <h3 className="font-BarlowCondensed tracking-widest text-grey-light text-[14px]">Est. travel time</h3>
                            <p className="font-Bellefair text-[28px]">{destinations && destinations[destIndex].travel}</p>
                        </div>
                    
                    </div>
                </div>
                
           </section>
        </div>
    </div>
    )
}