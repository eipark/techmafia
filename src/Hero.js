import {
  Box,
  Button,
  Badge,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Center,
  Divider,
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
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip="text"
            size={useBreakpointValue({
              base: 'lg',
              md: 'lg',
            })}
          >
            Discover the mafias of top tech companies.<br />
            See how they stack up.
          </Heading>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="muted"
          >
            <i>Tech mafia (n): The alumni of a tech company who go on to start other companies</i>
          </Text>


        </Stack>

      </Stack>

    </Box>
  </Container>
)

export default Hero;
