import React from 'react';
import { Routes, Route} from 'react-router-dom';

import AppLayout from 'components/AppLayout';
import { LanguageProvider } from 'context/LanguageContext';
import { SectionProvider } from 'context/SectionContext';

import Main from './main';
import Projects from './projects';
import Articles from './articles';

import './styles.scss';

function App() {
  return (
    <LanguageProvider>
    <SectionProvider>
    <AppLayout>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/articles' element={<Articles/>}/>
      </Routes>
    </AppLayout>
    </SectionProvider>
    </LanguageProvider>
  );
}

export default App;
