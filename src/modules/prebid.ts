import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';

import { prebid_js as version } from './_version.json';

const prebid: FoolModule = () => fakeWindowProperty('pbjs', { version });

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  prebid.npm = 'prebid.js';
}

export default prebid;
