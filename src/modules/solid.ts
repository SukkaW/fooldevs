import type { FoolModule } from '.';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const solid: FoolModule = () => {
  return chain([
    fakeWindowProperty('__SOLID_DEVTOOLS__', true),
    fakeWindowProperty('Solid$$', true)
  ]);
};

export default solid;
