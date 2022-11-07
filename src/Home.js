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
  Text
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import Hero from './Hero';
import Footer from './Footer';
import Airtable from './Airtable';
import ExactBuyerSrc from './images/exactbuyer.svg';

const Home = () =>  {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box
      as="section"
      pb={{
        base: '12',
        md: '24',
      }}
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
          </HStack>
        </Container>
      </Box>
      <Divider />
      <Hero />
      <Airtable />
      <Container my="12">
        <Heading as="h4" size="sm" id="add">
          Incorrect data? Want to add your company to the list?
        </Heading>
        <Text>Let us know 📧 techmafia.io@gmail.com or twitter.</Text>
      </Container>
      <Footer />
    </Box>
  )
}
export default Home;
