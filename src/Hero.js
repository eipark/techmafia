import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  SimpleGrid,
  Center,
  Divider,
} from '@chakra-ui/react'
import * as React from 'react'
import ExactBuyerSrc from './images/exactbuyer.svg';
import PTTSrc from './images/ptt.png';

const Hero = () => (
  <Container
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Box
      bg="bg-surface"
      py={{
        base: '5',
        md: '10',
      }}
      px="6"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        align="center"
      >
        <Stack
          spacing={{
            base: '4',
            md: '5',
          }}
          textAlign="center"
        >
          <Heading
            size={useBreakpointValue({
              base: 'sm',
              md: 'md',
            })}
          >
            Browse the mafias of the top tech companies.<br />
            See how they stack up.
          </Heading>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="muted"
          >
            <i>Tech mafia (n): The companies created by former employees of another tech company</i>
          </Text>

          <Divider />

          <SimpleGrid columns={2} spacing={20}>
            <Box>
              Data powered by
              <a target="_blank" href="https://exactbuyer.com?utm_source=mafia" title="ExactBuyer: AI-powered business search engine"><img margin="auto" src={ExactBuyerSrc} /></a>
              <a target="_blank" href="https://exactbuyer.com?utm_source=mafia" title="ExactBuyer: AI-powered business search engine"><b>ExactBuyer</b></a>: Prospecting, just like Googling
            </Box>
            <Box>
              Sponsored by
              <a target="_blank" href="https://blog.parttimetech.io?utm_source=mafia" title="Part-Time Tech: The Future of Work isn't just Remote, it's Part-Time">
                <img margin="auto" width={80} src={PTTSrc} />
              </a>
              <a target="_blank" href="https://blog.parttimetech.io?utm_source=mafia" title="Part-Time Tech: The Future of Work isn't just Remote, it's Part-Time"><b>Part-Time Tech</b></a>: Unlocking part-time <br />employment in the tech industry.
            </Box>
          </SimpleGrid>

        </Stack>

      </Stack>

    </Box>
  </Container>
)

export default Hero;
