import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { next as version } from '@/version.json';

const nextjs: FoolModule = () => fakeWindowProperty('next', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  nextjs.npm = 'next';
}

export default nextjs;
