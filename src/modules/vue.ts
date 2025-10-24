import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { chain } from '../utils/chain';
import { vue as version } from './_version.json';

const vue: FoolModule = () => chain([
  fakeWindowProperty('Vue', { version }),
  fakeWindowProperty('__VUE__'),
  fakeWindowProperty('__VUE_HOT_MAP__')
]);

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  vue.npm = 'vue';
}

export default vue;
