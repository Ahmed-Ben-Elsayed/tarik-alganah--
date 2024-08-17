import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../Sheet/sheet.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Sheet = () => {
  const { number } = useParams();
  const navigate = useNavigate(); // Get the navigate function
  const [sheet, setSheet] = useState([]);
  const [num, setNum] = useState(null);
  const [audio, setAudio] = useState("");
  const [names, setNames] = useState("");
  const [place, setPlace] = useState("");
  const [sound, setSound] = useState("9");
  let [spinner, setspinner] = useState(true);
  const [numbb, setNumbb] = useState(parseInt(number, 10));

  const next = () => {
    const nextNumber = num + 1;
    setNumbb(nextNumber);
    navigate(`/quran/${nextNumber}`); // Navigate to the next surah
  };

  const prev = () => {
    const prevNumber = num - 1;
    setNumbb(prevNumber);
    navigate(`/quran/${prevNumber}`); // Navigate to the previous surah
  };

  const handleChange = (e) => {
    setSound(e.target.value);
  };

  const getQuran = async () => {
    try {
      const data = await axios.get(
        `https://api.alquran.cloud/v1/surah/${number}`
      );
      const audioData = await axios.get(
        `https://api.quran.com/api/v4/chapter_recitations/${sound}/${number}`
      );
      setSheet(data.data.data.ayahs);
      setNum(data.data.data.number);
      setNames(data.data.data.name);
      setPlace(data.data.data.revelationType);
      setAudio(audioData.data.audio_file.audio_url);
      setspinner(false);
    } catch (error) {}
  };

  useEffect(() => {
    getQuran();
  }, [sound, number]);

  return (
    <>
      <div className="iqraa">
        {spinner ? (
          <>
            <div className="loading-tf">
              <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="top">
              <h3>الرقم : {num}</h3>
              <h3>{names}</h3>
              <h3>{place === "Meccan" ? "مكية" : "مدنية"}</h3>
            </div>
            <div className="top">
              <audio src={audio} controls></audio>
              <Link className="tf" to={`/quran/tafsir/${number}`}>
                التفسير
              </Link>
              <Box sx={{ minWidth: 150 }} className="box">
                <FormControl fullWidth>
                  <InputLabel className="label" id="demo-simple-select-label">
                    أختر الشيخ
                  </InputLabel>
                  <Select
                    className="select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sound}
                    label="اختر الشيخ"
                    onChange={handleChange}
                  >
                    <MenuItem value={"9"}>المنشاوى</MenuItem>
                    <MenuItem value={"2"}>عبدالباسط عبدالصمد</MenuItem>
                    <MenuItem value={"6"}>الحصرى</MenuItem>
                    <MenuItem value={"7"}>العفاسى</MenuItem>
                    <MenuItem value={"3"}>السديس</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="top">
              <button className="link" onClick={next}>
                السورة التالية
              </button>
              <button className="link" onClick={prev}>
                السورة السابقة
              </button>
            </div>
            <div className="sheet">
              {sheet.map((item, index) => (
                <h3 key={index} className="h3">
                  {item.text}
                  <p>{item.numberInSurah}</p>
                </h3>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
