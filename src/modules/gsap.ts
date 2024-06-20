import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { gsap as version } from '@/version.json';

const gsap: FoolModule = () => {
  return fakeWindowProperty('gsap', { version });
};
gsap.npm = 'gsap';

export default gsap;
