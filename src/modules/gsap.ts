import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { gsap as version } from './_version.json';
import { chain } from '../utils/chain';

const gsap: FoolModule = () => chain([
  fakeWindowProperty('gsap', { version }),
  fakeWindowProperty('gsapVersions', version)
]);
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  gsap.npm = 'gsap';
}

export default gsap;
