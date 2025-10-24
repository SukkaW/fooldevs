import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { svelte as version } from './_version.json';

const svelte: FoolModule = () => fakeWindowProperty('__svelte', {
  v: new Set([version])
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  svelte.npm = 'svelte';
}

export default svelte;
