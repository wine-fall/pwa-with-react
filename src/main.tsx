import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import './i18.ts';
import {MuiWrapper} from '@/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MuiWrapper>
    <App />
  </MuiWrapper>,
);
