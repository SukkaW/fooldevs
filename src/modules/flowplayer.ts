import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { flowplayer as version } from '@/version.json';

const flowplayer: FoolModule = () => fakeWindowProperty('flowplayer', { version });

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  flowplayer.npm = 'flowplayer';
}

export default flowplayer;
