import type { FoolModule } from '.';
import { chain } from '../utils/chain';

import { fakeWindowProperty } from '../utils/fake-window-property';

const monaco: FoolModule = () => {
  return chain([
    fakeWindowProperty('MonacoEnvironment'),
    fakeWindowProperty('manoco', { editor: {} })
  ]);
};

export default monaco;
