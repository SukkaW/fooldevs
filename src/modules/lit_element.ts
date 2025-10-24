import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { lit_element as version } from '@/version.json';

const lit_element: FoolModule = () => fakeWindowProperty('litElementVersions', version);
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  lit_element.npm = 'lit-element';
}

export default lit_element;
