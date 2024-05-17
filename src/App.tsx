import './App.css';
import {PalaisTimeLine} from '@/components';
import {LanguagesOptsType} from '@/types';
import {useTranslation} from 'react-i18next';

import {LanguageMap} from '@/constant';

const Languages: LanguagesOptsType = {
  [LanguageMap.EN]: {name: 'English'},
  [LanguageMap.ZH]: {name: '中文'}
};

function App() {
  const {i18n} = useTranslation();
  return (
    <div>
      {Object.keys(Languages).map(lng => {
        return <button
          type='submit'
          key={lng}
          onClick={() => {
            i18n.changeLanguage(lng).catch((err) => {
              console.error('i18n.changeLanguage error is', err);
            });
          }}
        >{Languages[lng].name}</button>;
      })}
      <PalaisTimeLine />
    </div>
  );
}

export default App;
