import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { lodash as version } from '@/version.json';

const lodash: FoolModule = () => fakeWindowProperty('_', { version });
lodash.npm = 'lodash';

export default lodash;
