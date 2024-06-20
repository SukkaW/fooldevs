import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

const nextjs: FoolModule = () => {
  return fakeWindowProperty('next', { version: '14.0.4' });
};

export default nextjs;
