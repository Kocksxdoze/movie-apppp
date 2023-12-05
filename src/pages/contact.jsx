import React from 'react'
import {
    Box,
    Heading,
    Button,
    Text,
    Input,
    Textarea,

} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
function Contact() {
    const { t } = useTranslation()
    return (

        <>

            <Heading display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"flex-start"} color={"white"} fontSize={"24px"} ml={{ base: "0", md: "220px" }} mt={30} gap={2}>
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.87641 5.68912C8.42947 6.08825 8.42946 6.91175 7.87641 7.31088L1.5852 11.8512C0.92384 12.3285 0 11.8559 0 11.0403V1.95972C0 1.14411 0.923841 0.671535 1.58521 1.14883L7.87641 5.68912Z" fill="#E50914" />
                </svg>
                Connect with us
            </Heading>
            <Text maxW={"538px"} textAlign={"left"} ml={{ base: "0", md: "220px" }} fontSize={"15px"}>{t("inf")}
                Source: filmberry.com</Text>
            <Box display={"flex"} flexDir={"column"} ml={{ base: "0", md: "220px" }} gap={6} color={"#E0E0E0"} mt={35}>

                <Input type='text' placeholder='Name *' w={{ base: "300px", md: "538px" }} borderRadius={"6px"} bg={"#111111"} />
                <Input type='text' placeholder='Email *' w={{ base: "300px", md: "538px" }} borderRadius={"6px"} bg={"#111111"} />

                <Textarea placeholder='Message' w={{ base: "400px", md: "538px" }} h={160} borderRadius={"6px"} bg={"#111111"} />

            </Box>
            <Box display={"flex"} flexDir={"row"} justifyContent={"flex-start"} alignItems={"center"} gap={"60px"} ml={{ base: "0", md: "220px" }} mt={35} h={45} fontWeight={600} fontFamily={"Montserrat"}>
                <Button variant={"chip"} borderRadius={4} fontSize={14} fontWeight={600} w={270}>{t("Send Message")}</Button>
                <Box display={"flex"} flexDir={"row"} alignItems={"center"} gap={"20px"} >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 1H6.5C3.46243 1 1 3.46243 1 6.5V17.5C1 20.5376 3.46243 23 6.5 23H17.5C20.5376 23 23 20.5376 23 17.5V6.5C23 3.46243 20.5376 1 17.5 1Z" fill="white" />
                        <path d="M16.3997 11.303C16.5354 12.2185 16.3791 13.1535 15.9528 13.9749C15.5266 14.7964 14.8521 15.4626 14.0255 15.8787C13.1988 16.2948 12.262 16.4396 11.3482 16.2926C10.4345 16.1455 9.59041 15.7141 8.936 15.0597C8.28158 14.4053 7.85018 13.5612 7.70315 12.6475C7.55612 11.7337 7.70095 10.7969 8.11703 9.97024C8.53312 9.14357 9.19928 8.46914 10.0208 8.04289C10.8422 7.61665 11.7772 7.46028 12.6927 7.59603C13.6265 7.7345 14.491 8.16964 15.1585 8.83717C15.8261 9.50469 16.2612 10.3692 16.3997 11.303Z" stroke="#0D0C11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.05 5.95001H18.061" stroke="#0D0C11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z" fill="white" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z" fill="white" />
                    </svg>
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 2.36755C23.0801 2.7691 22.0916 3.04048 21.0541 3.16257C22.1132 2.53771 22.9264 1.54822 23.3093 0.369245C22.3025 0.95737 21.201 1.37174 20.0523 1.59446C19.1167 0.61323 17.7838 0 16.3085 0C13.4759 0 11.1793 2.26065 11.1793 5.04888C11.1793 5.44466 11.2247 5.82996 11.3121 6.19959C7.04941 5.98896 3.27012 3.97893 0.740332 0.924219C0.298926 1.66992 0.0459962 2.53732 0.0459962 3.4625C0.0459962 5.21423 0.951563 6.75956 2.32773 7.66504C1.51323 7.63993 0.716649 7.42337 0.00449216 7.03344C0.00419927 7.05459 0.00419927 7.07574 0.00419927 7.09699C0.00419927 9.54327 1.77217 11.584 4.11846 12.0478C3.36317 12.25 2.57093 12.2796 1.80225 12.1343C2.45488 14.1402 4.34912 15.5999 6.59346 15.6408C4.83809 16.9949 2.62646 17.8021 0.223535 17.8021C-0.190527 17.8021 -0.59873 17.7782 -1 17.7316C1.26982 19.1641 3.96582 20 6.8623 20C16.2966 20 21.4555 12.3064 21.4555 5.63443C21.4555 5.41544 21.4506 5.1977 21.4406 4.98121C22.4448 4.26664 23.3114 3.38157 24 2.36755Z" fill="white" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8368 11.8086L11.2632 10.6078C11.0386 10.5035 10.8542 10.6204 10.8542 10.8691V13.1309C10.8542 13.3796 11.0386 13.4965 11.2632 13.3922L13.8356 12.1914C14.0614 12.0859 14.0614 11.9141 13.8368 11.8086ZM12 1C5.92479 1 1 5.92479 1 12C1 18.0752 5.92479 23 12 23C18.0752 23 23 18.0752 23 12C23 5.92479 18.0752 1 12 1ZM12 16.4687C6.36938 16.4687 6.27083 15.9611 6.27083 12C6.27083 8.03885 6.36938 7.53125 12 7.53125C17.6306 7.53125 17.7292 8.03885 17.7292 12C17.7292 15.9611 17.6306 16.4687 12 16.4687Z" fill="white" />
                    </svg>

                </Box>
            </Box>
        </>
    )
}

export default Contact