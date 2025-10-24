import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

const rive: FoolModule = () => fakeWindowProperty('rive', { Rive: '' });

export default rive;
