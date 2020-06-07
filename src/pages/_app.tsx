import React, { useState }from 'react';
import { Box, Container, CssBaseline } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { Topbar } from '../components/Topbar';
import { Sidebar } from '../components/Sidebar';
import { useMediaQuery } from '@material-ui/core';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#388e3c'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
    color: {
      default: '#fff'
    }
  }
});

function MyApp({ Component, pageProps }) {

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = openSidebar;

  return (
      <React.Fragment>
        <Head>
          <title>BP-TAPERA</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Topbar onSidebarOpen={handleSidebarOpen}/>
          <Sidebar
            onClose={handleSidebarClose}
            open={shouldOpenSidebar}
            variant={'temporary'}
          />
          <Container maxWidth={false}>
            <Box marginTop={2}>
              <Component {...pageProps} />
            </Box>
          </Container>
        </ThemeProvider>
      </React.Fragment>
  );
}

export default MyApp

