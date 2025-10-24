import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';

const zone_js: FoolModule = () => fakeWindowProperty('Zone', { root: '' });

export default zone_js;
