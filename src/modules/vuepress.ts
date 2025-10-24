import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { vuepress as version } from '@/version.json';

const vuepress: FoolModule = () => fakeWindowProperty('__VUEPRESS__', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  vuepress.npm = 'vuepress';
}

export default vuepress;
