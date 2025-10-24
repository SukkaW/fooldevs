import type { FoolModule } from './_';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { socket_io as version } from '@/version.json';

const socket_io: FoolModule = () => fakeWindowProperty('io', {
  Socket: {},
  version
});
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  socket_io.npm = 'socket.io';
}

export default socket_io;
