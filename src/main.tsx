import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Suspense} from 'react';

import {CircularProgress, Box} from '@mui/material';

import './index.css';
import './i18.ts';
import {MuiWrapper} from '@/components';

export default function CircularIndeterminate() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '200px'
    }}>
      <CircularProgress />
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MuiWrapper>
    <Suspense fallback={<CircularIndeterminate />}>
      <App />
    </Suspense>
  </MuiWrapper>,
);
