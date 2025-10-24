import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { gsap as version } from '@/version.json';

const gsap: FoolModule = () => fakeWindowProperty('gsap', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  gsap.npm = 'gsap';
}

export default gsap;
