import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { typekit as version } from '@/version.json';

const typekit: FoolModule = () => {
  return fakeWindowProperty('Typekit', {
    config: {
      js: version
    }
  });
};
typekit.npm = 'typekit';

export default typekit;
