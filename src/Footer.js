import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ExactBuyerSrc from './images/exactbuyer.svg';

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
          Data powered by: <a href="https://exactbuyer.com?utm_source=mafia" title="ExactBuyer: AI-powered business search engine"><img src={ExactBuyerSrc} /></a>
          </Box>
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="on-accent-subtle">
          Made by @eipark
        </Text>
      </Stack>
    </Container>
  </Box>
)
export default Footer;
