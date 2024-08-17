import React from 'react'
import '../Navbar/navbar.css'
import { IoMdMenu } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import '../../../src/jquery-3.7.1.min.js'
export default function Navbar({dark,darkk}) {
    function menuedown(){
        $('.nav-left').removeClass("up")
        $('.nav-left').toggleClass("down")
    }
    function close(){
        $('.nav-left').removeClass("down")
        $('.nav-left').addClass("up")
    }
    return (
        <nav>
         <Link onClick={close} to='/' className='nav-right'>طريق الجنة             </Link>   
            <ul className='nav-left'>
                <li><Link onClick={close}  to="/">الصفحه الرئيسية </Link><span></span></li>
                <li><Link onClick={close}  to="/Ahadith">أحاديث </Link><span></span></li>
                <li><Link onClick={close}  to="/quran">القرأن الكريم </Link><span></span></li>
                <li><Link onClick={close}  to="/times">أوقات الصلاة</Link><span></span></li>
                <li><Link  onClick={close} to="/contact">تواصل معنا </Link><span></span></li>
                <li>{dark ? <FaSun  onClick={darkk} className='dicon sun '/>:<FaMoon onClick={darkk} className='dicon'/> } </li>
            </ul>
            <IoMdMenu onClick={menuedown} className='menue' />

        </nav>
    )
}
