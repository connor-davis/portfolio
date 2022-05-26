import './index.css';

import App from './App';
import { Router } from 'solid-app-router';
import { registerSW } from 'virtual:pwa-register';
/* @refresh reload */
import { render } from 'solid-js/web';

let Routed = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

render(Routed, document.getElementById('root'));

const intervalMS = 60 * 60 * 1000

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
  onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
});

if (typeof window !== 'undefined') {
  import('./sw');
}
