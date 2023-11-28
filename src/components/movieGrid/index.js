import React from "react";
import MovieSingleCard from "../movieSingleCard";
import SerieSingleCard from "../serieSingleCard";
import "swiper/css";
import { useState } from "react";
import { useEffect } from "react";
import fetcher from "../../utils/fetcher";
import { Flex, Heading, Spinner, Button, Text } from "@chakra-ui/react";

function MovieGrid({ url, title, name, params, id, isSerie }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  const newParams = params + `&page=${page}`

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page !== 1) {

      setPage(page - 1)
    }
  }

  useEffect(() => {
    setPage(1)
  }, [id]);
  useEffect(() => {
    fetcher(url, newParams)
      .then((responseData) => {
        setData(responseData.results);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => console.error("error:" + err));
  }, [id, page]);
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

        <>{data && data.length > 0 ? (
          <>
            {<>
              <Heading
                display={"flex"}
                color={"white"}
                textAlign={"left"}
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                size={"lg"}
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
                <br />
                Page: {page}
              </Heading>

              <Flex flexWrap={"wrap"} gap={{ base: 1, md: 10 }} justifyContent={{ base: "center", md: "flex-start" }}>
                {data &&
                  data.map((movie, indx) => <MovieSingleCard isSerie={isSerie} movie={movie} />)
                }
              </Flex>
            </>}
          </>
        ) : "Type the correct name"}
          <Flex justifyContent={"center"} alignItems={"center"} mt={10} gap={3}>
            <Button variant={page <= 1 ? "disabled" : "chip"} onClick={prevPage}>Prev</Button>
            <h2 className="text-white" >{page}</h2>
            <Button variant={"chip"} onClick={nextPage}>Next</Button>
          </Flex>
        </>


      )
      }
    </div >
  );
}

export default MovieGrid;
