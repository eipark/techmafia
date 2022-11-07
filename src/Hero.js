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
          </Text>
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
