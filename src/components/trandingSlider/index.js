import React, { useState, useEffect } from 'react'
import fetcher from '../../utils/fetcher';
import { Spinner } from '@chakra-ui/react';
function TrandingSlider() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState([])
  useEffect(() => {
    fetcher("/movie/popular")
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
  console.log(genres)
  return (
    <>
      {!loading ?
        <>
          <div className="main">
            <button className="top">TOP</button>
            <h1>{data[0].title}</h1>
            <p>{data[0].overview}</p>
            <p>{data[0].release_date.slice(0, 4)} |  <span className="age">16+</span> | {getGenre(data[0].genre_ids[0]).name}</p>
            <p>Seans 1 - Eplscode 1 - Genre comedy, detective, detective </p>
            <button className="watch" variant={"chip"}>Watch</button>
          </div>
        </>
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