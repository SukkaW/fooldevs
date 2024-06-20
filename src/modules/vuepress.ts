import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { vuepress as version } from '@/version.json';

const vuepress: FoolModule = () => {
  return fakeWindowProperty('__VUEPRESS__', { version });
};
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  vuepress.npm = 'vuepress';
}

export default vuepress;
