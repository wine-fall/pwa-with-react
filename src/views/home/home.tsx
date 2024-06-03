import {PalaisTimeLine} from '@/components';
import {Box} from '@mui/material';
import FormDialog from '@/components/form_dialog/form_dialog';

const Home = () => {
  return (
    <Box sx={{
      height: 'calc(100vh - 4rem)',
    }}>
      
      <PalaisTimeLine />
      <FormDialog />
    </Box>
  );
};

export default Home;