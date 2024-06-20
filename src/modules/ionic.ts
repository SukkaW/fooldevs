import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { ionic as version } from '@/version.json';

const ionic: FoolModule = () => fakeWindowProperty('Ionic', { version });
ionic.npm = 'ionic';

export default ionic;
