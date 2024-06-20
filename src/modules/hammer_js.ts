import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { hammerjs as version } from '@/version.json';

const hammer_js: FoolModule = () => fakeWindowProperty('Hammer', {
  VERSION: version
});
hammer_js.npm = 'hammerjs';

export default hammer_js;
