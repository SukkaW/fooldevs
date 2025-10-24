import type { FoolModule } from './_';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { lodash as version } from '@/version.json';

const lodash: FoolModule = () => fakeWindowProperty('_', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  lodash.npm = 'lodash';
}

export default lodash;
