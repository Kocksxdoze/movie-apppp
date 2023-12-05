import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import {
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Input,
    HStack,
    IconButton,
    Heading,
    useToast,
} from "@chakra-ui/react";
import LanguageChanger from "./languageChanger";
import { useNavigate } from "react-router-dom";
export default function HeaderDesktop() {
    const { t } = useTranslation()
    const [inputValue, setInputValue] = useState()
    const toast = useToast()
    const relocate = () => {
        if (inputValue.length > 0) {
            window.location.replace(`/search?searchValue=${inputValue}`)
        } else
            toast({
                title: "Enter your search value",
                description: "",
                status: "error",
                duration: 3000,
                isClosable: true,

            })

    }
    return (
        <div className="2xl:container 2xl:mx-auto">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            <div className="bg-transparent rounded  py-5 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-10 lg:pr-96 pr-6">
                        <Link to={`/`}>
                            <Image src="/img/logo.png" />
                        </Link>
                    </div>
                    {/* For medium and plus sized devices */}
                    <ul className="hidden md:flex flex-auto space-x-2">
                        <Link to={`/`}>
                            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white  cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded">
                                {t("Home")}
                            </li>
                        </Link>
                        <Link to={`/movies`}>
                            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white-600   cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded">
                                {t("Movies")}
                            </li>
                        </Link>
                        <Link to={`/series`}>
                            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white-600   cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded">
                                {t("Series")}
                            </li>
                        </Link>
                        <Link to={`/contact`}>
                            <li
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white-600   cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded"
                            >
                                {t("Contact")}
                            </li>
                        </Link>
                        <Link to={`/copyright`}>
                            <li
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white-600   cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded"
                            >
                                {t("Copyright")}
                            </li>
                        </Link>

                    </ul>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <Popover >
                                <PopoverTrigger>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.1988 11.6083H12.3648L12.0691 11.3234C12.7289 10.5574 13.2112 9.65499 13.4813 8.6809C13.7514 7.70682 13.8028 6.6851 13.6317 5.68886C13.1355 2.7555 10.6861 0.413034 7.72986 0.0542773C6.69056 -0.0771269 5.63496 0.0308227 4.64383 0.369866C3.6527 0.708909 2.75231 1.27006 2.01156 2.01038C1.2708 2.75069 0.709324 3.65056 0.370083 4.64111C0.0308408 5.63166 -0.0771721 6.68664 0.0543092 7.72533C0.413276 10.6798 2.75712 13.1278 5.6922 13.6237C6.68902 13.7947 7.71134 13.7434 8.68599 13.4734C9.66065 13.2034 10.5635 12.7215 11.3301 12.0621L11.6151 12.3575V13.1911L16.1022 17.6755C16.5351 18.1082 17.2425 18.1082 17.6753 17.6755C18.1082 17.2429 18.1082 16.536 17.6753 16.1033L13.1988 11.6083ZM6.86412 11.6083C4.23521 11.6083 2.11309 9.48746 2.11309 6.86009C2.11309 4.23273 4.23521 2.11185 6.86412 2.11185C9.49302 2.11185 11.6151 4.23273 11.6151 6.86009C11.6151 9.48746 9.49302 11.6083 6.86412 11.6083Z"
                                            fill="white"
                                        />
                                    </svg>
                                </PopoverTrigger>
                                <PopoverContent bg={"secondary"}>
                                    <PopoverArrow />
                                    < PopoverBody >
                                        <Heading fontSize={"18px"} color={"white"}>Search for movies</Heading>
                                        <HStack padding={3}>
                                            <Input onChange={(e) => setInputValue(e.target.value)} placeholder={"search"} />
                                            <IconButton onClick={relocate} icon={<svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.1988 11.6083H12.3648L12.0691 11.3234C12.7289 10.5574 13.2112 9.65499 13.4813 8.6809C13.7514 7.70682 13.8028 6.6851 13.6317 5.68886C13.1355 2.7555 10.6861 0.413034 7.72986 0.0542773C6.69056 -0.0771269 5.63496 0.0308227 4.64383 0.369866C3.6527 0.708909 2.75231 1.27006 2.01156 2.01038C1.2708 2.75069 0.709324 3.65056 0.370083 4.64111C0.0308408 5.63166 -0.0771721 6.68664 0.0543092 7.72533C0.413276 10.6798 2.75712 13.1278 5.6922 13.6237C6.68902 13.7947 7.71134 13.7434 8.68599 13.4734C9.66065 13.2034 10.5635 12.7215 11.3301 12.0621L11.6151 12.3575V13.1911L16.1022 17.6755C16.5351 18.1082 17.2425 18.1082 17.6753 17.6755C18.1082 17.2429 18.1082 16.536 17.6753 16.1033L13.1988 11.6083ZM6.86412 11.6083C4.23521 11.6083 2.11309 9.48746 2.11309 6.86009C2.11309 4.23273 4.23521 2.11185 6.86412 2.11185C9.49302 2.11185 11.6151 4.23273 11.6151 6.86009C11.6151 9.48746 9.49302 11.6083 6.86412 11.6083Z"
                                                    fill="white"
                                                />
                                            </svg>}></IconButton>
                                        </HStack>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>

                            <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                            <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
                        </div>
                        <svg
                            className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 border-white"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <LanguageChanger />
                    </div>
                </nav>
                {/* for smaller devcies */}
            </div >
        </div >
    );
}
