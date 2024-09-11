import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { store } from './shared/store/store.ts';

import './index.css';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
