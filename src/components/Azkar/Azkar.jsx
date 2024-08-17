import React, { useEffect, useState } from "react";
import "../Azkar/Azkar.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Azkar() {
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
  const { number } = useParams();
  let [Tafsir, setTafsir] = useState([]);
  let [spinner, setspinner] = useState(true);
  async function getAzkar() {
    try {
      const data = await axios.get(
        `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${number}`
      );
      setTafsir(data.data.result);
      setspinner(false);
    } catch {}
  }
  useEffect(function () {
    getAzkar();
  }, []);
  return (
    <div className="tafsirs" key={"Tafsir"}>
      {spinner ? (
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
      ) : (
        <>
          <h1 className="qaddress">التفسير</h1>
          <div className="tafsir">
            {Tafsir.map(function (item, index) {
              return (
                <div key={index}>
                  <h3>{item.arabic_text}</h3>
                  <p>{item.translation}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
