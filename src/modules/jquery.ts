import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { jquery as version } from '@/version.json';

const jquery: FoolModule = () => {
  return fakeWindowProperty('jQuery', {
    fn: {
      jquery: version
    }
  });
};
jquery.npm = 'jquery';

export default jquery;
