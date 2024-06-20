import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const rive: FoolModule = () => {
  return fakeWindowProperty('rive', { Rive: '' });
};

export default rive;
