import type { FoolModule } from './_';
import { chain } from '../utils/chain';

import { fakeWindowProperty } from '../utils/fake-window-property';

const mobx: FoolModule = () => chain([
  fakeWindowProperty('__mobxGlobal', '1'),
  fakeWindowProperty('__mobxInstanceCount', '1'),
  fakeWindowProperty('__mobxGlobals', '1')
]);

export default mobx;
