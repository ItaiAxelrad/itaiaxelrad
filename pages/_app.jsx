import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import BaseLayout from '@components/BaseLayout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CacheProvider } from '@emotion/react';
import { deepmerge } from '@mui/utils';
import createEmotionCache from '@lib/createEmotionCache';
import globalTheme, { getDesignTokens } from '@styles/theme';
import '@styles/global.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { ...pageProps },
  } = props;

  // detect user preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const initMode = 'dark'; //prefersDarkMode ? 'dark' : 'light';

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(deepmerge(globalTheme, getDesignTokens(initMode))),
    [initMode],
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
