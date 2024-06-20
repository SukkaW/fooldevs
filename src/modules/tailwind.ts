import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const tailwind: FoolModule = () => {
  return fakeWindowProperty('tailwind');
};

export default tailwind;
