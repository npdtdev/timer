import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';

import '@/index.css';
import { TimerTabs, TimerTabsContext } from '@/stores/timerTabs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TimerTabsContext.Provider value={new TimerTabs()}>
      <App />
    </TimerTabsContext.Provider>
  </React.StrictMode>,
);
