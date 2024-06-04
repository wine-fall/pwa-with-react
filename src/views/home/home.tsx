import {PalaisTimeLine} from '@/components';
import {Box} from '@mui/material';
import FormDialog from '@/components/form_dialog/form_dialog';
import {EventFormValues} from './home.type';
import {eventDefalutFormValues, eventFormFields} from '@/constant/home.constant';

const Home = () => {
  return (
    <Box sx={{
      height: 'calc(100vh - 4rem)',
    }}>
      
      <PalaisTimeLine />
      <FormDialog<EventFormValues>
        defaultValues={eventDefalutFormValues} 
        fileds={eventFormFields} 
      />
    </Box>
  );
};

export default Home;
