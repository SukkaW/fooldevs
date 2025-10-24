import type { FoolModule } from './_types';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const solid: FoolModule = () => chain([
  fakeWindowProperty('__SOLID_DEVTOOLS__', true),
  fakeWindowProperty('Solid$$', true)
]);

export default solid;
