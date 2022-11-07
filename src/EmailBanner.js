import {
  Box,
  Button,
  CloseButton,
  Container,
  Icon,
  Input,
  LightMode,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi'

const EmailBanner = () => {
  const [display, setDisplay] = useState(true);
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })
  if (!display) return;
  return (
    <Box
      as="section"
      pb={{
        base: '0',
        md: '0',
      }}
    >
      <Box bg="bg-accent" color="on-accent">
        <Container
          py={{
            base: '4',
            md: '2.5',
          }}
          position="relative"
        >
          <CloseButton
            onClick={() => {setDisplay(false)}}
            display={{
              md: 'none',
            }}
            position="absolute"
            right="2"
            top="2"
          />
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            justify="space-between"
            spacing={{
              base: '3',
              md: '8',
            }}
          >
            <Stack
              spacing="4"
              direction={{
                base: 'column',
                md: 'row',
              }}
              align={{
                base: 'start',
                md: 'center',
              }}
            >
              {!isMobile && (
                <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                  <Icon as={FiMail} boxSize="6" />
                </Square>
              )}
              <Stack
                spacing="0.5"
                pe={{
                  base: '4',
                  sm: '0',
                }}
              >
                <Text fontWeight="medium">Subscribe to hear about the newest mafias and other muck.</Text>
                <Text color="on-accent-muted">
                  2x month tops, no spam, unsubscribe anytime.
                </Text>
              </Stack>
            </Stack>
            <Stack
              as="form"
              onSubmit={(e) => e.preventDefault()}
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing={{
                base: '3',
                md: '2',
              }}
              align={{
                base: 'stretch',
                md: 'center',
              }}
            >
              <LightMode>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  isRequired
                  variant="outline-on-accent"
                />
              </LightMode>
              <Button variant="primary-on-accent" flexShrink={0} type="submit">
                Subscribe
              </Button>
              <CloseButton
                onClick={() => {setDisplay(false)}}
                display={{
                  base: 'none',
                  md: 'inline-flex',
                }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
export default EmailBanner;
