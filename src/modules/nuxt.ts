import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const nuxt: FoolModule = () => {
  return fakeWindowProperty('$nuxt', {
    config: {},
    data: {},
    path: '/',
    state: {},
    serverRendered: true,
    $root: {
      constructor: {
        config: {
          devtools: false
        }
      }
    }
  });
};

export default nuxt;
