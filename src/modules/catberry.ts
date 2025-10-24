import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { catberry as version } from './_version.json';

const catberry: FoolModule = () => fakeWindowProperty('catberry', {
  version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  catberry.npm = 'catberry';
}

export default catberry;
