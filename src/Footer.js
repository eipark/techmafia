import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaMailBulk, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <Box bg="bg-accent" color="on-accent">
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
          <Box>
            <strong>TechMafia</strong>&nbsp;<br />
            Created by <a href="linkedin.com/in/ernestipark">Ernie Park</a> &middot;&nbsp;
            <a href="twitter.com/eipark">@eipark</a>
          </Box>
          <ButtonGroup variant="ghost-on-accent">
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
        <Text fontSize="sm" color="on-accent-subtle">
        </Text>
      </Stack>
    </Container>
  </Box>
)
export default Footer;
