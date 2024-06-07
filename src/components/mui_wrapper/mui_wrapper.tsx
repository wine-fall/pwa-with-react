import React from 'react';
import {CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material';
import theme from './theme';

export const MuiWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiWrapper;
