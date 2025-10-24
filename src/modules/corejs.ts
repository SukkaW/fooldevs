import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { core_js as version } from '@/version.json';

const corejs: FoolModule = () => fakeWindowProperty('__core-js_shared__', { versions: [{ version }]
});

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  corejs.npm = 'core-js';
}

export default corejs;
