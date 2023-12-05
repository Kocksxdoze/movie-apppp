import React, { useState, useEffect } from 'react'
import fetcher from '../../utils/fetcher';
import { Spinner, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css";
import { useTranslation } from 'react-i18next';
import { languageConverter } from '../../utils/languageConverter';
function TrandingSlider() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState([])
  const { t, i18n } = useTranslation()
  const lang = languageConverter(i18n.language)
  useEffect(() => {
    fetcher("/movie/popular", null, lang)
      .then((responseData) => {
        setData(responseData.results);
        fetcher("/genre/movie/list")
          .then((responseData) => {
            setGenres(responseData.genres)
          })
        setTimeout(() => {
          setLoading(false)
        }, 200);
      })

      .catch((err) => console.error("error:" + err));
  }, []);

  const getGenre = (id) => {
    return genres.filter((genre) => {
      return genre.id === id
    })
  }

  const pagination = {
    clickable: true,
  }

  return (
    <>
      {!loading ?
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          freeMode={true}
          loop
          modules={[Pagination]}
          pagination={pagination}
        >
          {data.slice(0, 4).map((movie, indx) => (

            <SwiperSlide key={indx}>
              <>
                <div style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                }} className="main" >

                  <button className="top">TOP</button>
                  <h1>{movie.title}</h1>
                  <Text ml={"40px"} maxW={{ base: "100%", md: "60%" }}>{movie.overview}</Text>
                  <Text ml={"40px"}>{movie.release_date.slice(0, 4)} |  <span className="age">16+</span> | {getGenre(movie.genre_ids[0])[0]?.name}</Text>
                  <button className="watch" variant={"chip"}>Watch</button>
                </div>
              </>
            </SwiperSlide>

          ))}


        </Swiper>
        : <Spinner
          thickness='6px'
          speed='0.65s'
          emptyColor='gray.200'
          color='red.500'
          size='xl'
          w={"150px"}
          h={"150px"}
          mt={"15%"}
        />
      }

    </>
  )
}
export default TrandingSlider