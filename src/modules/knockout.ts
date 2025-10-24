import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';

import { knockout as version } from './_version.json';

const knockout: FoolModule = () => fakeWindowProperty('ko', {
  version
});

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  knockout.npm = 'knockout';
}

export default knockout;
