import React from "react";
import MovieSingleCard from "./movieSingleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import { useEffect } from "react";
import fetcher from "../utils/fetcher";
import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { languageConverter } from "../utils/languageConverter";

function MovieSlider({ url, title, name, isSerie }) {
  const [data, setData] = useState([]);
  const { i18n } = useTranslation();
  const lang = languageConverter(i18n.language)
  console.log(lang)
  useEffect(() => {
    fetcher(url, null, lang)
      .then((responseData) => {
        setData(responseData.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <div>
      <Heading
        display={"flex"}
        color={"white"}
        textAlign={"left"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        pl={"2%"}
        mt={"30px"}
        pb={"30px"}
        gap={2}
      >
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.25 5.56699C10.5833 5.75944 10.5833 6.24056 10.25 6.43301L1.25 11.6292C0.916666 11.8216 0.5 11.5811 0.5 11.1962V0.803847C0.5 0.418947 0.916667 0.178385 1.25 0.370835L10.25 5.56699Z"
            fill="#E50914"
          />
        </svg>

        {title}
        {name}
      </Heading>

      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        freeMode={true}
        loop
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 2,
          },

          1028: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
          2000: {
            slidesPerView: 8,
            spaceBetween: 2,
          },
        }}
      >
        {data &&
          data.map((movie, indx) => (
            <SwiperSlide key={indx}>
              <MovieSingleCard isSerie={isSerie} movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MovieSlider;
