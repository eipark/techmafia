import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  useBreakpointValue,
  Heading,
  Link,
  Text,
  SimpleGrid,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import Hero from './Hero';
import Footer from './Footer';
import Airtable from './Airtable';
import ExactBuyerSrc from './images/exactbuyer.svg';
import PTTSrc from './images/ptt.png';

const Home = () =>  {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box
      as="section"
    >
      <Box
        as="nav"
        bg="bg-surface"
        py={{
          base: '4',
          lg: '5',
        }}
      >
        <Container>
          <HStack spacing="10" justify="space-between">
            <Heading as='h1' size='md'>🕵️‍♀️&nbsp; Tech Mafia</Heading>
            {/*
            {isDesktop ? (
              <HStack spacing="10">
                <ButtonGroup variant="link" spacing="8">
                  <Button key={'mafia-tracker'}><Link href="#mafias">Mafias</Link></Button>
                  <Button key={'add-company'}><Link href="#add">Add your company</Link></Button>
                </ButtonGroup>
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
            */}
          </HStack>
        </Container>
      </Box>
      <Divider />
      <Hero />
      <Airtable />

      <Container my="16" textAlign="center">
        <Heading as="h4" size="sm" id="add">
          Want to add your company to the list? Incorrect data?
        </Heading>
        <Text>Let us know  📧 techmafia.io@gmail.com or 🐦 <a href="twitter.com/techmafiaio">@techmafiaio</a>.</Text>
      </Container>

      <Container my="12" textAlign="center">
        <Box
          bg="bg-surface"
          px={{ base: '4', md: '6' }}
          py="10"
          boxShadow={useColorModeValue('sm', 'sm-dark')}
          borderRadius="lg"
        >
        <SimpleGrid columns={2} spacing={30}>
          <Box>
            <Badge mb="2">Data powered by</Badge>
            <a target="_blank" href="https://exactbuyer.com?utm_source=mafia" title="ExactBuyer: AI-powered business search engine">
              <img style={{margin:"auto"}} src={ExactBuyerSrc} />
            </a>
            <a target="_blank" href="https://exactbuyer.com?utm_source=mafia" title="ExactBuyer: AI-powered business search engine"><b>ExactBuyer</b></a>: Prospecting, just like Googling
          </Box>
          <Box>
            <Badge mb="2" >Sponsored by</Badge>
            <a target="_blank" href="https://blog.parttimetech.io?utm_source=mafia" title="Part-Time Tech: The Future of Work isn't just Remote, it's Part-Time">
              <img style={{margin: "auto"}} width={80} src={PTTSrc} />
            </a>
            <a target="_blank" href="https://blog.parttimetech.io?utm_source=mafia" title="Part-Time Tech: The Future of Work isn't just Remote, it's Part-Time"><b>Part-Time Tech</b></a>: Unlocking part-time <br />employment in the tech industry.
          </Box>
        </SimpleGrid>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
export default Home;
