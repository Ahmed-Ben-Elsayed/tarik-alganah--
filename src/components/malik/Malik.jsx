import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Malik = () => {
    let [Hadith, setHadith] = useState([])
    let [info,setinfo] = useState([])
    let [spinner, setspinner] = useState(true);
    async function getAhadith() {
        try{
            const data = await axios.get('https://hadis-api-id.vercel.app/hadith/malik?page=1&limit=500');
            setHadith([...data.data.items]);    
            setinfo(data.data.data)
            setspinner(false);
        }
        catch{}
    }
    useEffect(function () {
        getAhadith();
    }, [setHadith])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,             // Index of the initial slide
        // autoplay: true,              // Autoplay slides
        autoplaySpeed: 3000,         // Autoplay interval in milliseconds
        pauseOnHover: true, 
    };
    return (
        <div className='hadith' key={"hadith"}>
            {spinner  ?  
            <>
             <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
          </div>
            </>
            
            :
        <>
        <div className='address'><h1>أحاديث</h1><span className='span1'></span> <span className='span2'></span></div>
        <div className='inf'><h3> مالك بن أنس  </h3></div>
        <Slider className='slider' {...settings}>
                 {Hadith.map(function(item,index){
                     return(
                         <div key={index}>
                        <div key={item} className='hadithh'>
                        <p className='pp'>{item.arab}</p>
                        </div>
                        <p>500/{item.number}</p>
                        </div>
                    )
                })}
        </Slider>
                </>
                }
    </div>
    )
}
