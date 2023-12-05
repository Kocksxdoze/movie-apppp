import React, { useState, useEffect } from "react";
import fetcher from "../utils/fetcher";
import OneChip from "./oneChip";
import { Container } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import { languageConverter } from "../utils/languageConverter";

function Chips({ setId, categorieId, setName }) {
  const [data, setData] = useState([]);
  const { i18n } = useTranslation();
  const lang = languageConverter(i18n.language)
  useEffect(() => {
    fetcher("/genre/movie/list", null, lang)
      .then((responseData) => {
        setData(responseData.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <Container maxW={{ base: "100%", md: "80%", }} pt={10} pb={10}>
        <Swiper
          spaceBetween={0}
          slidesPerView={9}
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
          {data.map((oneGenre, indx) => (
            <SwiperSlide
              onClick={() => {
                setId(oneGenre.id)
                setName(oneGenre.name)
              }}
              key={indx}
              dir="row"
            >
              <OneChip
                categorieId={categorieId}
                id={oneGenre.id}
                name={oneGenre.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default Chips;
