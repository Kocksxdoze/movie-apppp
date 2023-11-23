import React from "react";
import MovieSingleCard from "../movieSingleCard";
import "swiper/css";
import { useState } from "react";
import { useEffect } from "react";
import fetcher from "../../utils/fetcher";
import { Flex, Heading, Spinner } from "@chakra-ui/react";

function MovieGrid({ url, title, name, params, id }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetcher(url, params)
      .then((responseData) => {
        setData(responseData.results);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);
  return (
    <div>
      {loading ? (
        <Spinner
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
          w={"150px"}
          h={"150px"}
          mt={"15%"}
        />
      ) : (
        <>
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

          <Flex flexWrap={"wrap"} gap={10} justifyContent={{ base: "center", md: "flex-start" }}>
            {data &&
              data.map((movie, indx) => <MovieSingleCard movie={movie} />)}
          </Flex>
        </>
      )}
    </div>
  );
}

export default MovieGrid;
