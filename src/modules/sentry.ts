import type { FoolModule } from './_';
import { chain } from '../utils/chain';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { sentry as version } from '@/version.json';

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
