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
} from '@chakra-ui/react'
import * as React from 'react'

const Hero = () => (
  <Container
    py={{
      base: '16',
      md: '24',
    }}
  >
    <Box
      bg="bg-surface"
      py={{
        base: '10',
        md: '16',
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
            Browse the mafias of the top tech companies.
          </Heading>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="muted"
          >
          </Text>
        </Stack>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          width="full"
          maxW={{
            md: 'lg',
          }}
          spacing="4"
        >
          <FormControl flex="1">
            <Input type="email" size="lg" placeholder="Enter your email" />
            <FormHelperText color="subtle">At most 1 email/week on new companies and other mafia news. No spam, unsubscribe anytime.</FormHelperText>
          </FormControl>
          <Button variant="primary" size="lg">
            Subscribe
          </Button>
        </Stack>
      </Stack>
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
            Data powered by ExactBuyer.
            Sponsored by Part-Time Tech.
          </Heading>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="muted"
          >
          </Text>
        </Stack>
    </Box>
  </Container>
)

export default Hero;
