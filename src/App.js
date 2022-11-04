import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './Home';
import Hero from './Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
