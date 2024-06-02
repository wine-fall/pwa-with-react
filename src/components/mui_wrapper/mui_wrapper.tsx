import React from 'react';
import {CssBaseline, StyledEngineProvider} from '@mui/material';


export const MuiWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {children}
    </StyledEngineProvider>
  );
};

export default MuiWrapper;