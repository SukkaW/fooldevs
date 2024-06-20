import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

const motion: FoolModule = () => {
  return fakeWindowProperty('__MOTION_DEV_TOOLS__');
};

export default motion;
