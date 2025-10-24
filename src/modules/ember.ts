import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';

import { ember_source as version } from './_version.json';

const ember: FoolModule = () => fakeWindowProperty('Ember', {
  VERSION: version
});

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  ember.npm = 'ember-source';
}

export default ember;
