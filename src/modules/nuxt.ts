import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

const nuxt: FoolModule = () => fakeWindowProperty('$nuxt', {
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

export default nuxt;
