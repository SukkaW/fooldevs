import type { FoolModule } from './_types';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const vitepress: FoolModule = () => chain([
  fakeWindowProperty('__vitepress', true),
  fakeWindowProperty('__VP_HASH_MAP__', true)
]);

export default vitepress;
