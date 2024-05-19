import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Suspense} from 'react';

import {CircularProgress, Box, StyledEngineProvider} from '@mui/material';

import './index.css';
import './i18.ts';

export default function CircularIndeterminate() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <CircularProgress sx={{
        marginTop: '400px'
      }} />
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider>
    <Suspense fallback={<CircularIndeterminate />}>
      <App />
    </Suspense>
  </StyledEngineProvider>,
);
