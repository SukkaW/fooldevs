import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';

const zone_js: FoolModule = () => fakeWindowProperty('Zone', { root: '' });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  zone_js.npm = 'zone.js';
}
export default zone_js;
