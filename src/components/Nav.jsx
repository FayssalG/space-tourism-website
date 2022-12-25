import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import logo from '../assets/shared/logo.svg'

export default function Nav(){

    const activeStyle = {
        borderColor : 'white'
    };

    function handleMenu() {
        const ham = document.querySelector('#ham')
        const menu =  document.querySelector('#menu')
        if (menu.style.display == 'block') {
            menu.style.display = 'none'
        }
        else{
            menu.style.display = 'block'
        }

        window.addEventListener('resize' , ()=>{
            menu.style.display = 'none'
        })
    }
    

    return(
        <nav className="flex items-center  pt-2  min-w-[250px] h-20 justify-between sm:mx-4 md:p-0 lg:pt-16 lg:pl-10">
            <div className="w-10 md:ml-4">
                <img src={logo} alt="" />
            </div>

            <div onClick={()=>handleMenu()} id="ham" className="relative cursor-pointer md:hidden lg:hidden">
                <img src="./src/assets/shared/icon-hamburger.svg" alt="" />
            </div>

            <div className="px-20 h-20 bg-white/[4%] backdrop-blur flex items-center justify-start relative lg:before:absolute lg:before:left-[-11rem] lg:before:max-w-[12rem] lg:before:w-[18rem] lg:before:origin-right lg:before:scale-x-150 lg:before:h-[2px] lg:before:bg-white/[10%] lg:before:backdrop-blur 
                            lg:max-w-[1000px] sm:hidden ">
                <ul className="h-full flex gap-12  text-white text-base">
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/'><span>00</span> HOME</NavLink></li>
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/destinations'><span>01</span> DESTINATION</NavLink></li>
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/crew'><span>02</span> CREW</NavLink> </li>
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/technology'><span>03</span> TECHNOLOGY</NavLink></li>
                </ul>
            </div>

            <div id="menu" className="z-20 hidden origin-right  animate-slide absolute  right-0 top-0 h-full w-[260px] bg-red-500-[4%] backdrop-blur-2xl md:hidden lg:hidden ">
                <div onClick={()=>handleMenu()} className="cursor-pointer absolute right-8 top-8 "><img src="./src/assets/shared/icon-close.svg" alt="close" /></div>
                <ul className="flex flex-col ml-10 mt-20 gap-10 text-white text-base  ">
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/'><span>00</span> HOME</NavLink></li>
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/destinations'><span>01</span> DESTINATION</NavLink></li>
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/crew'><span>02</span> CREW</NavLink> </li>
                    <li ><NavLink className="link-style" style={({isActive})=> isActive ? activeStyle : undefined} to='/technology'><span>03</span> TECHNOLOGY</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}