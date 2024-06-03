import {Box, CircularProgress} from '@mui/material';
import {Suspense} from 'react';

import './App.css';
import {RouterProvider} from 'react-router-dom';
import {router} from '@/router';

export const CircularIndeterminate = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '200px'
    }}>
      <CircularProgress />
    </Box>
  );
};



function App() {
  return (
    <Suspense fallback={<CircularIndeterminate />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
