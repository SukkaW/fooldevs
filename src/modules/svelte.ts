import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { svelte as version } from '@/version.json';

const svelte: FoolModule = () => {
  return fakeWindowProperty('__svelte', {
    v: new Set([version])
  });
};
svelte.npm = 'svelte';

export default svelte;
