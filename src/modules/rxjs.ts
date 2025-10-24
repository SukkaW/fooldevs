import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';

const rxjs: FoolModule = () => fakeWindowProperty('Rx', {
  CompositeDisposable: 0,
  Symbol: 0
});

export default rxjs;
