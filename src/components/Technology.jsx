import { useState } from 'react'
import Nav from './Nav'

export default function Technology({technology}){
    const [techIndex , setTechIndex] = useState(0)
    const handleSwitchIndex = (index , e)=>{
        setTechIndex(index)
        document.querySelector('.selected-tech').classList.remove('selected-tech')
        e.target.classList.add('selected-tech')
    }
    return(
        <div className="min-h-screen bg-cover bg-[url('./assets/technology/background-technology-mobile.jpg')] 
            md:bg-[url('./assets/technology/background-technology-tablet.jpg')]
            lg:bg-[url('./assets/technology/background-technology-desktop.jpg')]">
            <Nav></Nav>
            <main className='min-h-[85vh] flex flex-col justify-center text-white md:mt-14'>
                
                <section className='relative flex flex-col gap-8 md:gap-16  lg:w-fit lg:mt-20 lg:ml-auto lg:flex-row lg:items-center lg:justify-end lg:gap-24 '>
                    <h1 className='mt-4 mb-4 text-center uppercase font-BarlowCondensed tracking-widest md:text-left md:text-[1.2rem] md:ml-8 lg:text-left
                    lg:mt-14 lg:text-[1.7rem] lg:absolute lg:-top-[15vh] lg:left-0 '><span className='text-grey-light mr-2'>03</span>space lunch 101</h1>

                    {/* Image */}
                    <picture className='w-full lg:max-h-[400px] lg:max-w-[400px] lg:order-1 lg:ml-10'>
                        <source media='(max-width:1024px)' srcSet={technology && './src'+ technology[techIndex].images.landscape}/>
                        <source media='(min-width:1024px)' srcSet={technology && './src'+ technology[techIndex].images.portrait}/>
                        <img className='w-full' src={technology && './src'+ technology[techIndex].images.landscape} alt="" />
                    </picture>
                    {/* switching between images */}
                    <div className='font-Bellefair flex gap-4 justify-center [&>button]:w-10 [&>button]:h-10 [&>button]:rounded-full [&>button]:button-border 
                    md:[&>button]:w-14 md:[&>button]:h-14 
                    lg:flex-col lg:gap-6 lg:[&>button]:w-20 lg:[&>button]:h-20 lg:text-[2rem]'>
                        <button onClick={(e)=>handleSwitchIndex(0 , e)} className='selected-tech'>1</button>
                        <button onClick={(e)=>handleSwitchIndex(1 , e)}>2</button>
                        <button onClick={(e)=>handleSwitchIndex(2 , e)}>3</button>
                    </div>

                    {/* Infos */}
                    <div className='text-center lg:text-left'>
                        <p className='uppercase font-BarlowCondended tracking-widest text-grey-light text-[0.8rem] md:text-base '>the terminology ...</p>
                        <h2 className='uppercase font-Bellefair text-[2rem] mb-4 md:text-[2.5rem] lg:text-[3.1rem]'>{technology && technology[techIndex].name}</h2>
                        <p className='mx-auto max-w-[350px] font-Barlow text-[.9rem] text-grey-light md:max-w-[450px] md:text-base lg:text-[1.1rem] lg:max-w-[450px]'>
                            {technology && technology[techIndex].description}
                        </p>
                    </div>
                </section>
                
            
            </main>
        </div>
    )
}