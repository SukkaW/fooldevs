import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const crypto_js: FoolModule = () => {
  return fakeWindowProperty('CryptoJS', {
    Rabbit: ''
  });
};

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  crypto_js.npm = 'crypto-js';
}

export default crypto_js;
