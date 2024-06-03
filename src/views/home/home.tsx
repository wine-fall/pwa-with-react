import {PalaisTimeLine} from '@/components';
import {Box, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  return (
    <Box sx={{
      height: 'calc(100vh - 4rem)',
    }}>
      
      <PalaisTimeLine />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default Home;