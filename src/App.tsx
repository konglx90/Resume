import React, { useState, useEffect } from 'react';
import Resume from './Resume/index';
import i18n from './Resume/i18n';
import { getValueFromLocationSearch } from './tools'

// import './Code/two-pointer'
// import './Code/reverse-string'
// import './Code/remove-element'
// import './Code/binary-search'
// import './Code/search-insert'
// import './Code/ten-to-other'
// import './Code/big-add'
// import './Code/has-cycle'
// import './Code/compose'
// import './Code/set-version'
// import './Code/lazyload-img'
// import './Code/lazy'
import './Code/report-log'

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
