import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { vuepress as version } from './_version.json';

const vuepress: FoolModule = () => fakeWindowProperty('__VUEPRESS__', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  vuepress.npm = 'vuepress';
}

export default vuepress;
