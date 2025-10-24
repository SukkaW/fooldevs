import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { svelte as version } from '@/version.json';

const svelte: FoolModule = () => fakeWindowProperty('__svelte', {
  v: new Set([version])
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  svelte.npm = 'svelte';
}

export default svelte;
