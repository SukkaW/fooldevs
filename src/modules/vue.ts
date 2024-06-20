import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const vue: FoolModule = () => {
  return fakeWindowProperty('__VUE__', true);
};

export default vue;
