import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { typekit as version } from './_version.json';

const typekit: FoolModule = () => fakeWindowProperty('Typekit', {
  config: {
    js: version
  }
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  typekit.npm = 'typekit';
}

export default typekit;
