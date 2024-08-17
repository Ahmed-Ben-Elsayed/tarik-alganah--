import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import '../quran/quraan.css'
export const Quraan = ({spinner}) => {
    let [quraan , setquraan] = useState([])
    let [spinnerr, setspinner] = useState(true);
    async function getdata(){
    try{

        const data = await axios.get('https://api.alquran.cloud/v1/surah') 
        setquraan(data.data.data)
      setspinner(false);
    }catch{

    }
}
    useEffect(function(){
        getdata();
    },[])
    AOS.init();
    return (
        <div key={"quraan"}>
            {spinnerr ? 
                 <>
                 <div className="loading-tf">

          <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
          </div>
                 </div>
        </>
        :
        <>
        <h1 className='qaddress'> القرأن الكريم   </h1>
        <div className='Quran'>
            {quraan.map(function(item , index){
                return(
                    <Link to={`/quran/${item.number}`} key={index}   className="quaran">
                        <h4>{item.number}</h4>
                        <h3 >{item.name}</h3>
                        <h3 >{item.englishName}</h3>
                    </Link>
                )
                
            })}
            </div>
            </>
        }
        </div>
    )
}
