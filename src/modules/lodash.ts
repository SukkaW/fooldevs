import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { lodash as version } from './_version.json';

const lodash: FoolModule = () => fakeWindowProperty('_', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  lodash.npm = 'lodash';
}

export default lodash;
