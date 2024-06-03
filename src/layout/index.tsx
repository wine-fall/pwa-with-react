import React from 'react';
import {Outlet} from 'react-router-dom';
import {LanguageMap} from '@/constant';
import {LanguagesOptsType} from '@/types';
import {useTranslation} from 'react-i18next';

const Languages: LanguagesOptsType = {
  [LanguageMap.EN]: {name: 'English'},
  [LanguageMap.ZH]: {name: '中文'}
};

const Layout: React.FC = () => {
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
      <Outlet />
    </div>
  );
};

export default Layout;