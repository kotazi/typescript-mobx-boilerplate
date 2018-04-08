import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { profileStore } from './store/Profile';
import './index.css';

import { Provider } from 'mobx-react';

const stores = { profileStore };

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
