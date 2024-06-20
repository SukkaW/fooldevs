import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { lit_element as version } from '@/version.json';

const lit_element: FoolModule = () => {
  return fakeWindowProperty('litElementVersions', version);
};
lit_element.npm = 'lit-element';

export default lit_element;
