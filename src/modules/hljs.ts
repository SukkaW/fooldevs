import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

const hljs: FoolModule = () => fakeWindowProperty('hljs', {
  highlightBlock: {},
  listLanguages: ['javascript']
});

export default hljs;
