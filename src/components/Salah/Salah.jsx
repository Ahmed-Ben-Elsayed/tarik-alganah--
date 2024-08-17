import React, { useEffect, useState } from 'react'
import '../Salah/salah.css'
import axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export const Salah = () => {
    let [times, settimes] = useState([])
    let [days,setdays] = useState([])
    let [enday,setenday] = useState([])
    let [city,setcity] = useState("cairo");
    let [day,setday] = useState();
    let [month, setmonth] = useState();
    let [spinner, setspinner] = useState(true);
    let [year,setyear] = useState();
    const handleChange = (event) => {
        setcity(event.target.value)
    };
    useEffect(function(){
        setday(new Date().getDate())
        setmonth(new Date().getMonth())
        setyear(new Date().getFullYear())
    },[day,year,month])

    async function getdata() {
        try{

            const data = await axios.get(`https://api.aladhan.com/v1/timingsByCity/${day}-${month+1}-${year}?city=${city}&country=egypt&method=8`)
            settimes(data.data.data.timings)
            setdays(data.data.data.date.hijri.weekday.ar) 
            setenday(data.data.data.date.readable)
      setspinner(false);
        }catch{

        }
        }
        useEffect(function () {
        getdata();
    }, [city,day,month,year])

    return (
        <div className='salah'>
            {spinner ? 
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
            <div className='address'><h1 >أوقات الصلاة </h1><span className='span1'></span> <span className='span2'></span></div>
            <div className='add'>
            <h2> اليوم : {days}</h2>
            <h2>{enday}</h2>
            <div className='sel'>

            <h3>اختر مدينتك </h3>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">المدينة   </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={city}
                        label="city"
                        onChange={handleChange}
                        >
                        <MenuItem value={"cairo"}>القاهرة </MenuItem>
                        <MenuItem value={"alexandria"}>الأسكندرية</MenuItem>
                        <MenuItem value={"qalyubia"}>القليوبيه</MenuItem>
                        <MenuItem value={"port Said"}>بورسعيد </MenuItem>
                        <MenuItem value={"suez"}> السويس  </MenuItem>
                        <MenuItem value={"luxor"}> الأقصر   </MenuItem>
                        <MenuItem value={"dakahlia"}> الدقهلية    </MenuItem>
                        <MenuItem value={"sohag"}> سوهاج     </MenuItem>
                        <MenuItem value={"gharbia"}> الغربية     </MenuItem>
                        <MenuItem value={"asyut"}> اسيوط     </MenuItem>
                        <MenuItem value={"faiyum"}> الفيوم      </MenuItem>
                        <MenuItem value={"sharqia"}> الشرقية       </MenuItem>
                        <MenuItem value={"domiat"}> دمياط      </MenuItem>
                    </Select>
                </FormControl>
            </Box>
                        </div>
                        </div>
            <div className='cards'>
                <div className="card">
                    <h2>{times.Imsak}</h2>
                    <h3>الأمساك</h3>
                </div>
                <div className="card">
                    <h2>{times.Fajr}</h2>
                    <h3>الفجر</h3>
                </div>
                <div className="card">
                    <h2>{times.Sunrise}</h2>
                    <h3>الشروق</h3>
                </div>
                <div className="card">
                    <h2>{times.Dhuhr}</h2>
                    <h3>الظهر</h3>
                </div>
                <div className="card">
                    <h2>{times.Asr}</h2>
                    <h3>العصر</h3>
                </div>
                <div className="card">
                    <h2>{times.Maghrib}</h2>
                    <h3>المغرب</h3>
                </div>
                <div className="card">
                    <h2>{times.Sunset}</h2>
                    <h3>الغروب</h3>
                </div>
                <div className="card">
                    <h2>{times.Isha}</h2>
                    <h3>العشاء</h3>
                </div>
            </div>
    </>
    }
        </div>
    )
}
