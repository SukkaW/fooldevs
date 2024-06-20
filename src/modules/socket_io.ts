import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { socket_io as version } from '@/version.json';

const socket_io: FoolModule = () => fakeWindowProperty('io', {
  Socket: {},
  version
});
socket_io.npm = 'socket.io';

export default socket_io;
