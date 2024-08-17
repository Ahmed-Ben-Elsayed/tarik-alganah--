import { useEffect, useState } from 'react'
import {  CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css'
import '../jquery-3.7.1.min.js'
import Navbar from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Hadith } from './components/Ahadith/Hadith'
import { Collection } from './components/collectio/Collection'
import { Muslim } from './components/muslim/Muslim'
import { Tirmidzi } from './components/Tirmidzi/Tirmidzi'
import { Malik } from './components/malik/Malik'
import { Daood } from './components/daood/Daood'
import { Magah } from './components/magah/Magah'
import { Hanbl } from './components/hanbl/Hanbl'
import { Category } from './components/category/Category'
import { Quraan } from './components/quran/Quraan'
import { Sheet } from './components/Sheet/Sheet'
import Azkar from './components/Azkar/Azkar'
import { Salah } from './components/Salah/Salah'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
function App() {
  // spinner
  let [spinner, setspinner] = useState(true);
  useEffect(function(){
    if(window.scrollY>0){
      window.scrollTo(top="0")
    }
    setspinner(true);
    setTimeout(function(){
      setspinner(false)
    },3000)
  },[App])
// scroll
  window.onscroll=function(){
    if(window.scrollY>0){
      document.querySelector('.arrows').style.display = 'flex';
    }
    else{
  
      document.querySelector('.arrows').style.display = 'none';
    }
  }
  function scroll(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // dark mode 
  let [dark,setdark] = useState(false)
  function darkk(){
    setdark(!dark)
  } 
  return (
    <>
    <div className={ dark ? 'dark' : 'light'}>
    { spinner ?    <div className="sweet-loading">
      <ScaleLoader className='sp'
        color={'#36d7b7'}
        loading={spinner}
        // cssOverride={override}
        size={780}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
        :
        <BrowserRouter>
    <Navbar dark={dark} darkk={darkk}/>
    <div onClick={scroll} className='arrows'>
    <MdKeyboardDoubleArrowUp className='arrow' />
    </div>
    <Routes>
       <Route path='/' element= {<Header spinner={spinner} close={close}/>} />
       <Route path='/Ahadith' element= {<Collection spinner={spinner}/>} />
       <Route path='/hadith' element= {<Hadith spinner={spinner}/>} />
       <Route path='/muslim' element= {<Muslim spinner={spinner}/>} />
       <Route path='/tirmidzi' element= {<Tirmidzi spinner={spinner}/>} />
       <Route path='/malik' element= {<Malik spinner={spinner}/>} />
       <Route path='/daood' element= {<Daood spinner={spinner}/>} />
       <Route path='/magah' element= {<Magah spinner={spinner}/>} />
       <Route path='/ahmed' element= {<Hanbl spinner={spinner}/>} />
       <Route path='/times' element= {<Salah spinner={spinner}/>} />
       <Route path='/category' element= {<Category spinner={spinner}/>} />
       <Route path='/quran' element= {<Quraan spinner={spinner}/>} />
       <Route path='/contact' element= {<Contact spinner={spinner}/>} />
       <Route path='/quran/:number' element= {<Sheet spinner={spinner}/>} />
       <Route path='/quran/tafsir/:number' element= {<Azkar spinner={spinner}/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    }
    </div>
    </>
  )
}

export default App
