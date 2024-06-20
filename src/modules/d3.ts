import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { d3 as version } from '@/version.json';

const d3: FoolModule = () => {
  return fakeWindowProperty('d3', { version });
};
d3.npm = 'd3';

export default d3;
