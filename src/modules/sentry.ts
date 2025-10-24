import type { FoolModule } from './_types';
import { chain } from '../utils/chain';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { sentry as version } from './_version.json';

const sentry: FoolModule = () => chain([
  fakeWindowProperty('__SENTRY__', true),
  fakeWindowProperty('Raven', {
    config: {}
  }),
  fakeWindowProperty('Sentry', {
    SDK_VERSION: version
  })
]);
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  sentry.npm = 'sentry';
}

export default sentry;
