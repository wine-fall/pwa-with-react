import Layout from '@/layout';
import Home from '@/views/home/home';
import {createBrowserRouter} from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  }
]);