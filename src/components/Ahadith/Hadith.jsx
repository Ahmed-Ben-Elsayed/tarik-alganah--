import React, { useEffect, useState } from "react";
import "../Ahadith/Hadith.css";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ScaleLoader from "react-spinners/ScaleLoader";
import App from "../../App";
export const Hadith = () => {
  // Api
  let [Hadith, setHadith] = useState([]);
  let [info, setinfo] = useState([]);
  let [spinner, setspinner] = useState(true);
  async function getAhadith() {
    try {
      const data = await axios.get(
        "https://hadis-api-id.vercel.app/hadith/bukhari?page=1&limit=500"
      );
      setHadith([...data.data.items]);
      setinfo(data.data.data);
      setspinner(false);
    } catch {}
  }
  useEffect(
    function () {
      getAhadith();
    },
    [setHadith]
  );
  // slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0, // Index of the initial slide
    // autoplay: true,              // Autoplay slides
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    pauseOnHover: true,
  };
  return (
    <div className="hadith" key="hadith-container">
      {spinner ? (
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
      ) :
      
      ( <>
      <div className="address">
        <h1>أحاديث</h1>
        <span className="span1"></span> <span className="span2"></span>
      </div>
          <div className="inf">
            <h3>البخارى</h3>
          </div>
        <Slider className="slider" {...settings}>
          {Hadith.map(function (item, index) {
              return (
                  <div key={index} className="hadithh">
                <p className="pp">{item.arab}</p>
                <p>500/{item.number}</p>
              </div>
            );
        })}
        </Slider>
        </>
      )}
    </div>
  );
};
