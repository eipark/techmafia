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
import EmailBanner from './EmailBanner';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <EmailBanner />
      <Home />
    </ChakraProvider>
  );
}

export default App;
