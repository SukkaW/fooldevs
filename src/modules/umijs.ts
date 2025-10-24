import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { umi as version } from './_version.json';

const umijs: FoolModule = fakeWindowProperty('g_umi', {
  version
});

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  umijs.npm = 'umi';
}

export default umijs;
