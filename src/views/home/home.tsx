import {FormDialog, PalaisTimeLine} from '@/components';
import {Box} from '@mui/material';
import {EventFormValues} from './home.type';
import {eventDefalutFormValues, eventFormFields} from '@/constant/home.constant';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();

  return (
    <Box sx={{
      height: 'calc(100vh - 4rem)',
    }}>
      
      <PalaisTimeLine />
      <FormDialog<EventFormValues>
        buttonContent={t('event_btn_content', 'add event')}
        dialogTitle={t('event_dialog_title', 'Create A Event')}
        defaultValues={eventDefalutFormValues} 
        fileds={eventFormFields} 
      />
    </Box>
  );
};

export default Home;
