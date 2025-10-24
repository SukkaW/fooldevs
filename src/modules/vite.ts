import type { FoolModule } from './_';
import { fakeWindowProperty } from '../utils/fake-window-property';

const vite: FoolModule = () => fakeWindowProperty('__vite_is_modern_browser', true);

export default vite;
