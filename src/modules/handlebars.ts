import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { handlebars as version } from '@/version.json';

const handlebars: FoolModule = () => fakeWindowProperty('Handlebars', {
  VERSION: version
});
handlebars.npm = 'handlebars';

export default handlebars;
