import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

const react: FoolModule = () => {
  return fakeWindowProperty('__REACT_DEVTOOLS_ATTACH__');
};

export default react;
