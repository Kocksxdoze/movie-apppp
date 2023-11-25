import React from 'react'
import HeaderDesktop from './headerDesktop'
import HeaderMobile from './headerMobile'
import { Box } from '@chakra-ui/react'
function Header() {
  return (
    <div>
      <Box display={{ base: "none", md: "block" }}>
        <HeaderDesktop />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <HeaderMobile />
      </Box>
    </div>
  )
}

export default Header