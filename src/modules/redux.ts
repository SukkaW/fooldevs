import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';
import { noop } from '../utils/noop';

const redux: FoolModule = () => {
  return fakeWindowProperty('__REDUX_DEVTOOLS_EXTENSION__', {
    connect: noop
  });
};

export default redux;
