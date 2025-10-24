import type { FoolModule } from './_types';
import { chain } from '../utils/chain';

import { fakeWindowProperty } from '../utils/fake-window-property';

const monaco: FoolModule = () => chain([
  fakeWindowProperty('MonacoEnvironment'),
  fakeWindowProperty('manoco', { editor: {} })
]);

export default monaco;
