import { useState, useEffect } from "react";
import Header from "../../components/header/";
import Footer from "../../components/footer/";
import Main from "../../components/main";
import { constants } from "../../library/constants";
import DateImg from "../../components/date";
import Picture from "../../components/picture";
import fetchImg from "../../library/fetch-img/fetchImg";
import defaultNasaImg from "../../media/default-nasa-img.jpg";
import Explanation from "../../components/explanation";

const initialAPOD = {
  url: defaultNasaImg,
};

const NasaPicturePage = () => {
  const [apod, setApod] = useState(initialAPOD);
  const [apodDate, setApodDate] = useState(new Date().toLocaleDateString('en-CA'));

  const fetchImage = async (date) => {
    const dataFetchImg = await fetchImg(constants.url, constants.key, date);
    setApod(dataFetchImg);
  };

  useEffect(() => {
    fetchImage(apodDate);
  }, [apodDate]);

  return (
    <>
      <Header title={constants.title}/>
      <Main>
        <DateImg />
        <Picture src={apod.url} title={apod.title} />
        <Explanation text={apod.explanation} />
      </Main>
      <Footer text={constants.footerMessage}/>
    </>
  )
};

export default NasaPicturePage;
