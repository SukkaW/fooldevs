import type { FoolModule } from './_';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { ionic as version } from '@/version.json';

const ionic: FoolModule = () => fakeWindowProperty('Ionic', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  ionic.npm = 'ionic';
}

export default ionic;
