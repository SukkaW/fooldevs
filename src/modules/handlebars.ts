import type { FoolModule } from './_';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { handlebars as version } from '@/version.json';

const handlebars: FoolModule = () => fakeWindowProperty('Handlebars', {
  VERSION: version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  handlebars.npm = 'handlebars';
}

export default handlebars;
