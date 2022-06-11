import React from 'react';
import Login from './components/Login';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    tab: '#ea6f5a',
    button: {
      500: '#3194d0',
    },
    buttonYellow: {
      500: '#42c02e',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#f1f1f1',
        color: '#969696',
        fontWeight: '500',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: '#3194d0',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

console.log(theme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box pt="80px">
        <Login />
      </Box>
    </ChakraProvider>
  );
}

export default App;
