import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
    return (
        <Box >
            <hr className='footerLine' />
            <Box className='footer' flexDir={{ base: "column", md: "row" }} ml={{ base: "0px", md: "100px" }} >
                <Box className='footerMain' maxW={{ base: "90%", md: "40%" }} justifyContent={{ base: "center", md: "flex-start" }} alignItems={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
                    <Image className='logo' width={{ base: "200px", md: "200px" }} src='/img/logo.png' />
                    <Text >{t("footerInfo")}

                    </Text>
                </Box>
                <Box className='footerNavigation' flex={3} >
                    <Box className='footernav' ml={5} >
                        <UnorderedList display={"flex"}
                            textAlign={"left"}  // измените это значение на "left"
                            alignItems={"flex-start"}
                            justifyContent={"flex-start"}
                        >
                            <Text>{t("Pages")}</Text>
                            <ListItem>{t("The most watched movies")}</ListItem>
                            <ListItem>{t("Top Rated Movies")}</ListItem>
                            <ListItem>{t("Movies")}</ListItem>
                            <ListItem>{t("Serials")}</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box className='footernav'>
                        <UnorderedList>
                            <Text>{t("Our social networks")}</Text>
                            <ListItem>{t("Telegram")}</ListItem>
                            <ListItem>{t("Instagram")}</ListItem>
                            <ListItem>{t("Facebook")}</ListItem>
                            <ListItem>{t("YouTube")}</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box className='footernav'>
                        <UnorderedList>
                            <Text>{t("For reference")}</Text>
                            <ListItem>{t("Telegram")}</ListItem>
                            <ListItem>{t("Instagram")}</ListItem>
                            <ListItem>{t("Whatsapp")}</ListItem>
                            <ListItem>{t("Skype")}</ListItem>
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