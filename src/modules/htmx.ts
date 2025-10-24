import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { htmx_org as version } from './_version.json';

const htmx: FoolModule = () => fakeWindowProperty('html', { version });

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  htmx.npm = 'htmx.org';
}

export default htmx;
