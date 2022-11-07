import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaMailBulk, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <Box>Created by <a href="twitter.com/eipark">@eipark</a></Box>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="mailto:techmafia.io@gmail.com"
            aria-label="email"
            icon={<FaMailBulk fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="twitter.com/eipark"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} 
      </Text>
    </Stack>
  </Container>
)
export default Footer;
//TODO: CHANGE EMAIL TWITTER
