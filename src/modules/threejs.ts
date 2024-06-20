import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { three as version } from '@/version.json';

const threejs: FoolModule = () => {
  return fakeWindowProperty('THREE', {
    REVISION: version
  });
};
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  threejs.npm = 'three';
}

export default threejs;
