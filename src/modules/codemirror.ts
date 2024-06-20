import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { codemirror as version } from '@/version.json';

const codemirror: FoolModule = () => {
  return fakeWindowProperty('CodeMirror', { version });
};

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  codemirror.npm = 'codemirror';
}
export default codemirror;
