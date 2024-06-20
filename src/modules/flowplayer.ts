import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { flowplayer as version } from '@/version.json';

const flowplayer: FoolModule = () => {
  return fakeWindowProperty('flowplayer', { version });
};
flowplayer.npm = 'flowplayer';

export default flowplayer;
