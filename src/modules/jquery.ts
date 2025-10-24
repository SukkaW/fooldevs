import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { jquery as version } from './_version.json';

const jquery: FoolModule = () => fakeWindowProperty('jQuery', {
  fn: {
    jquery: version
  }
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  jquery.npm = 'jquery';
}

export default jquery;
