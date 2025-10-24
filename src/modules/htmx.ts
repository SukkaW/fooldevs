import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { htmx_org as version } from '@/version.json';

const htmx: FoolModule = () => fakeWindowProperty('html', { version });

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  htmx.npm = 'htmx.org';
}

export default htmx;
