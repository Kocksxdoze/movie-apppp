import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetcher from "../utils/fetcher";
import SerieCard from "../components/serieCard";
import Comments from "../components/comments";
import Thoughts from "../components/thoughts";
import ThoughtsSerie from "../components/thoughtsSerie";
import { comment } from "../db/db";
import { Button, Tag, Spinner, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { languageConverter } from "../utils/languageConverter";
function OneSerie() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [comm, setComm] = useState()
    const [commentsList, setCommentsList] = useState(comment)
    const location = useLocation()
    const id = location.pathname.replace(/^\D+/g, '')
    const { i18n } = useTranslation();
    const lang = languageConverter(i18n.language)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await fetcher(`/tv/${id}`, null, lang);
                setData(responseData);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        // Имитируем задержку в 2000 мс (2 секунды) с помощью setTimeout
        const timeout = setTimeout(() => {
            fetchData();
        }, 200);

        // Очищаем таймаут при размонтировании компонента
        return () => clearTimeout(timeout);
    }, []);


    const addComment = () => {
        setCommentsList([...commentsList, { name: "User", comment: comm }])
    }
    return (
        <div>
            {!loading ?
                <>
                    <Box height={{ base: "900px", md: "570px" }} style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`
                    }} className="background_img">

                    </Box>
                    <SerieCard data={data} />
                    <div className='commentContainer'>
                        <Tag mt={"100px"} fontSize={"24px"}
                            bg={"transparent"}
                            color={"white"}
                            fontWeight={"500"}
                            position={"relative"}
                            left={"-27%"}
                        >Thoughts</Tag>
                        <div className='inputCom'>
                            <img src='/img/avatar.png' />
                            <input
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

                    <ThoughtsSerie id={id} />

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

export default OneSerie