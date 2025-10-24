import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

const vue: FoolModule = () => fakeWindowProperty('__VUE__', true);

export default vue;
