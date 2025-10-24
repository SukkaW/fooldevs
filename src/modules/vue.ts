import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

const vue: FoolModule = () => fakeWindowProperty('__VUE__', true);

export default vue;
