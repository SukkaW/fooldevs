import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { codemirror as version } from './_version.json';

const codemirror: FoolModule = () => fakeWindowProperty('CodeMirror', { version });

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  codemirror.npm = 'codemirror';
}
export default codemirror;
