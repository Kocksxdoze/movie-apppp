import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetcher from "../utils/fetcher";
import MovieCard from "../components/movieCard";
import Comments from "../components/comments";
import Thoughts from "../components/thoughts";
import { comment } from "../db/db";
import { Button, Spinner, Box, Heading, Input, Flex } from "@chakra-ui/react";
import Video from "../components/VideoPlayer/video";
import { useTranslation } from "react-i18next";
import { languageConverter } from "../utils/languageConverter";
function OneMovie() {
    const [data, setData] = useState([])
    const { i18n } = useTranslation();
    const lang = languageConverter(i18n.language)
    const [video, setVideo] = useState([])
    const [loading, setLoading] = useState(true)
    const [comm, setComm] = useState()
    const [commentsList, setCommentsList] = useState(comment)
    const location = useLocation()
    const id = location.pathname.replace(/^\D+/g, '')
    useEffect(() => {
        fetcher(`/movie/${id}`, null, lang)
            .then((responseData) => {
                setData(responseData);
                fetcher(`/movie/${id}/videos`)
                    .then((responseData) => {
                        setVideo(responseData)
                    })
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            })

            .catch((err) => console.error("error:" + err));
    }, []);

    const addComment = () => {
        setCommentsList([...commentsList, { name: "User", comment: comm }])
    }


    return (
        <div>
            {!loading ?
                <>
                    <Box height={{ base: "950px", md: "570px" }} style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`
                    }} className="background_img">

                    </Box>
                    <MovieCard data={data} />  {video.results && video.results.length > 0 ?
                        <Flex justifyContent={"center"} mt={100}>
                            <Box w={800}>
                                <Video video={video.results[0]} ></Video>
                            </Box>

                        </Flex> : null}
                    <div className='commentContainer'>
                        <Heading fontSize={"36px"}
                            bg={"transparent"}
                            color={"white"}
                            fontWeight={"500"}
                            position={"relative"}
                            left={"-27%"}
                        >Thoughts</Heading>
                        <div className='inputCom'>
                            <img src='/img/avatar.png' />
                            <Input
                                border={"none"}
                                outline={"none"}
                                boxShadow={"0"}
                                borderBottom={"1px solid #FFFFFF8C"}
                                w={{ base: "auto", md: "855px" }}
                                onChange={(e) => setComm(e.target.value)}
                                className='typeCom'
                                type='text'
                                placeholder='Express an opinion'
                            />
                            <Button
                                bg="primary"
                                color="white"
                                borderRadius="100px"
                                w={"130px"}
                                h={"40px"}
                                boxShadow={"0px 0px 25px 0px rgba(255, 14, 30, 0.50)"}
                                fontSize={"14px"}
                                fontWeight={"600"}
                                onClick={addComment}>Add</Button>
                        </div>

                        {commentsList.map((com) => (
                            <Comments data={com} />

                        ))}
                    </div>


                    <Thoughts id={id} />


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
        </div >
    )
}

export default OneMovie