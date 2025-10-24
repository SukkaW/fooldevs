import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { mustache as version } from './_version.json';

const mustache: FoolModule = () => fakeWindowProperty('Mustache', {
  VERSION: version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  mustache.npm = 'mustache';
}

export default mustache;
