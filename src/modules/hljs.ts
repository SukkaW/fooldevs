import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const hljs: FoolModule = () => {
  return fakeWindowProperty('hljs', {
    highlightBlock: {},
    listLanguages: ['javascript']
  });
};

export default hljs;
