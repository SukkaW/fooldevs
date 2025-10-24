import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { typekit as version } from '@/version.json';

const typekit: FoolModule = () => fakeWindowProperty('Typekit', {
  config: {
    js: version
  }
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  typekit.npm = 'typekit';
}

export default typekit;
