import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { next as version } from './_version.json';

const nextjs: FoolModule = () => fakeWindowProperty('next', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  nextjs.npm = 'next';
}

export default nextjs;
