import {createTheme} from '@mui/material';

const rootElement = () => document.getElementById('root');

/**
 * create this theme so we can use tailwindcss on mui's popover popper and dialog 
 */
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
  }
});

export default theme;
