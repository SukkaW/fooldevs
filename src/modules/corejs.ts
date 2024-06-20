import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { core_js as version } from '@/version.json';

const corejs: FoolModule = () => {
  return fakeWindowProperty('__core-js_shared__', { versions: [{ version }]
  });
};
corejs.npm = 'core-js';

export default corejs;
