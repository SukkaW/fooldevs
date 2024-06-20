import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { codemirror as version } from '@/version.json';

const codemirror: FoolModule = () => {
  return fakeWindowProperty('CodeMirror', { version });
};
codemirror.npm = 'codemirror';

export default codemirror;
