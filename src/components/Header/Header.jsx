import React from 'react'
import '../Header/header.css'
import { IoMdArrowDropleft } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
export const Header = () => {
    AOS.init();
    return (
        <div className='header'>
            <div className="header-right">
                <h1   data-aos="fade-up" className='text'>حَاسبوا أنفسكم قبل أن تُحاسبوا.. وزنوا أعمالكم قبل أن تُوزن لكم.</h1>
                <Link  to='/category' className='tsfh'> <IoMdArrowDropleft />
                    <p>ابدأ التصفح </p><span></span></Link>
            </div>
        </div>
    )
}
