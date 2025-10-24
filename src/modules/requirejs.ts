import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';
import { requirejs as version } from './_version.json';

const requirejs: FoolModule = () => fakeWindowProperty('requirejs', {
  version
});

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  requirejs.npm = 'requirejs';
};

export default requirejs;
