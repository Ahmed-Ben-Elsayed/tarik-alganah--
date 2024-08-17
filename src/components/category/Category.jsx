import React from 'react'
import { HiDocumentText } from "react-icons/hi2";
import { FaBookQuran } from "react-icons/fa6";
import { FaMosque } from "react-icons/fa";
import '../category/category.css'
import AOS from 'aos';
import { MdCollectionsBookmark } from "react-icons/md";
import { Link } from 'react-router-dom';
export const Category = () => {
    AOS.init();
    return (
        <div className='categs'>
            <Link   data-aos="fade-down"  to='/Ahadith' className="categ">
                <h3>الأحاديث</h3>
                <HiDocumentText  className='icon' />
            </Link>
            <Link to='/quran' data-aos="fade-down" className="categ">
                <h3>القرأن الكريم </h3>
                <FaBookQuran className='icon' />
            </Link>
            <Link to='/times' data-aos="fade-up" className="categ last">
                <h3>اوقات الصلاة </h3>
                <FaMosque  className='icon'/>
            </Link>
        </div>
    )
}
