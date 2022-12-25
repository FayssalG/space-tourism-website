import	Nav from './Nav';

export default function Home(){

    return(
    <div className="min-h-screen bg-cover bg-[url('../assets/home/background-home-mobile.jpg')] 
        md:bg-[url('../assets/home/background-home-tablet.jpg')]
        lg:bg-[url('../assets/home/background-home-desktop.jpg')]">
        <Nav/>
        <div className="flex items-center justify-center min-h-[75vh] w-[90%] mx-auto mt-14 md:w-[100%]">

            <div className="w-full flex flex-col text-center items-center gap-20 lg:flex-row lg:justify-evenly lg:items-end lg:text-left  ">
                <div className="text-grey-light">
                    <p className="font-Barlow  text-base tracking-wider lg:text-lg">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className="font-Bellefair text-white text-[5rem] leading-[7rem] mb-[.5rem] lg:text-[8rem] lg:leading-[9rem] ">SPACE</h1>
                    <p className="text-[15px] font-Barlow min-w-[10rem] max-w-[27rem] lg:text-[16px]">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>

                <button className="flex justify-center items-center bg-white h-[150px] w-[150px] rounded-full 
                                    hover:shadow-[0_0_0_55px_rgba(255,255,255,0.3)] transition-shadow lg:h-[200px] lg:w-[200px]">
                    <h2 className="text-black uppercase text-xl font-Bellefair">Explore</h2>
                </button>
            </div>
 
        </div>
    </div>
    )
}