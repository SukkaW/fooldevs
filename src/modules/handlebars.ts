import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { handlebars as version } from './_version.json';

const handlebars: FoolModule = () => fakeWindowProperty('Handlebars', {
  VERSION: version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  handlebars.npm = 'handlebars';
}

export default handlebars;
