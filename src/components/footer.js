import React from 'react'
import { Link } from 'react-router-dom'
import {
    Flex,
    Box,
    Image,
    chakra,
    Heading,
    Button,
    Text,
    ListItem,
    UnorderedList,

} from '@chakra-ui/react'
function Footer() {
    return (
        <div>
            <hr className='footerLine' />
            <Flex >
                <Box textAlign={"left"} display={"flex"} flexDir={"column"}>
                    <Image className='logo' src='/img/logo.png' w={150} />
                    <Text maxW={"50%"}>Filmlarga bo'lgan huquqlar ularning mualliflariga tegishli. Barcha filmlar faqat ma'lumot uchun taqdim etiladi. Ma'muriyat foydalanuvchilar tomonidan joylashtirilgan noqonuniy materiallar uchun javobgar emas! Har qanday film mualliflik huquqi egasining iltimosiga binoan olib tashlanadi
                    </Text>
                </Box>
                <Flex>
                    <Box >
                        <Heading fontSize={"16px"}>Pages</Heading>
                        <UnorderedList display={"flex"} flexDir={"column"}>
                            <ListItem>The most watched movies</ListItem>
                            <ListItem>Top Rated Movies</ListItem>
                            <ListItem>Movies</ListItem>
                            <ListItem>Serials</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box display={"flex"} flexDir={"column"}>
                        <Heading fontSize={"16px"}>Our social networks</Heading>
                        <UnorderedList display={"flex"} flexDir={"column"}>
                            <ListItem>Serials</ListItem>
                            <ListItem>Telegram</ListItem>
                            <ListItem>Telegram</ListItem>
                            <ListItem>Telegram</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box display={"flex"} flexDir={"column"}>
                        <Heading fontSize={"16px"}>For reference</Heading>
                        <UnorderedList display={"flex"} flexDir={"column"}>
                            <ListItem>Telegram</ListItem>
                            <ListItem>Telegram</ListItem>
                            <ListItem>Telegram</ListItem>
                            <ListItem>Telegram</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Flex>
            <Box textAlign={"center"} mt={20} mb={10}>© Filmberry.com - 2023
            </Box>
        </div >
    )
}

export default Footer