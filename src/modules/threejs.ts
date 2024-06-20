import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { three as version } from '@/version.json';

const threejs: FoolModule = () => {
  return fakeWindowProperty('THREE', {
    REVISION: version
  });
};
threejs.npm = 'three';

export default threejs;
