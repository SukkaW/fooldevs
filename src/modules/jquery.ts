import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { jquery as version } from '@/version.json';

const jquery: FoolModule = () => fakeWindowProperty('jQuery', {
  fn: {
    jquery: version
  }
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  jquery.npm = 'jquery';
}

export default jquery;
