import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { backbone as version } from './_version.json';

const backbone: FoolModule = () => fakeWindowProperty('Backbone', {
  VERSION: version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  backbone.npm = 'backbone';
}

export default backbone;
