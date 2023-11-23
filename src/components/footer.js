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
        <Box >
            <hr className='footerLine' />
            <Box className='footer' flexDir={{ base: "column", md: "row" }} ml={{ base: "0px", md: "100px" }} >
                <Box className='footerMain' maxW={{ base: "90%", md: "40%" }} justifyContent={{ base: "center", md: "flex-start" }} alignItems={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
                    <Image className='logo' width={{ base: "200px", md: "200px" }} src='/img/logo.png' />
                    <Text >Filmlarga bo'lgan huquqlar ularning mualliflariga tegishli. Barcha filmlar faqat ma'lumot uchun taqdim etiladi. Ma'muriyat foydalanuvchilar tomonidan joylashtirilgan noqonuniy materiallar uchun javobgar emas! Har qanday film mualliflik huquqi egasining iltimosiga binoan olib tashlanadi
                    </Text>
                </Box>
                <Box className='footerNavigation' flex={3} >
                    <Box className='footernav' ml={5} >
                        <UnorderedList display={"flex"}
                            textAlign={"left"}  // измените это значение на "left"
                            alignItems={"flex-start"}
                            justifyContent={"flex-start"}
                        >
                            <Text>Pages</Text>
                            <ListItem>The most watched movies</ListItem>
                            <ListItem>Top Rated Movies</ListItem>
                            <ListItem>Movies</ListItem>
                            <ListItem>Serials</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box className='footernav'>
                        <UnorderedList>
                            <Text>Our social networks</Text>
                            <ListItem>Telegram</ListItem>
                            <ListItem>Instagram</ListItem>
                            <ListItem>Facebook</ListItem>
                            <ListItem>YouTube</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box className='footernav'>
                        <UnorderedList>
                            <Text>For reference</Text>
                            <ListItem>Telegram</ListItem>
                            <ListItem>Instagram</ListItem>
                            <ListItem>Whatsapp</ListItem>
                            <ListItem>Skype</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
            </Box>
            <Box textAlign={"center"} mt={20} mb={10}>© Filmberry.com - 2023
            </Box>
        </Box >
    )
}

export default Footer