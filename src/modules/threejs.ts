import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { three as version } from './_version.json';

const threejs: FoolModule = () => fakeWindowProperty('THREE', {
  REVISION: version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  threejs.npm = 'three';
}

export default threejs;
