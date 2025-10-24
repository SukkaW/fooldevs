import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { alpinejs as version } from './_version.json';

const alpinejs: FoolModule = () => fakeWindowProperty('Alpine', {
  version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  alpinejs.npm = 'alpinejs';
}

export default alpinejs;
