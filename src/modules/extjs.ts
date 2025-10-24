import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';

import { ciallo } from './_version.json';

const extjs: FoolModule = () => fakeWindowProperty('Ext', {
  version: ciallo,
  versions: {
    extjs: {
      version: ciallo
    }
  }
});

export default extjs;
