import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { next as version } from '@/version.json';

const nextjs: FoolModule = () => {
  return fakeWindowProperty('next', { version });
};
nextjs.npm = 'next';

export default nextjs;
