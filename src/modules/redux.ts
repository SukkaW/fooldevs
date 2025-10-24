import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';
import { noop } from 'foxts/noop';

const redux: FoolModule = () => fakeWindowProperty('__REDUX_DEVTOOLS_EXTENSION__', {
  connect: noop
});

export default redux;
