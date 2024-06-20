import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const svelte: FoolModule = () => {
  return fakeWindowProperty('__svelte', {
    v: new Set(['1'])
  });
};

export default svelte;
