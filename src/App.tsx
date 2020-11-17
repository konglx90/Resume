import React, { useState, useEffect } from 'react';
import Resume from './Resume/index';
import i18n from './Resume/i18n';
import { getValueFromLocationSearch } from './tools'

import './Code/two-pointer'
// import './Code/reverse-string'

const App: React.FC = () => {

  const [lang, setLang] = useState<string>('zh');
  useEffect(() => {
    const lang = getValueFromLocationSearch('lang') || 'zh';
    setLang(lang)
  }, [])

  return (
    <Resume {...i18n(lang)} />
  );
}

export default App;
