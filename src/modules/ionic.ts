import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { ionic as version } from './_version.json';

const ionic: FoolModule = () => fakeWindowProperty('Ionic', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  ionic.npm = 'ionic';
}

export default ionic;
