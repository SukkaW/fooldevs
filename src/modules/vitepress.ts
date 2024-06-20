import type { FoolModule } from '.';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const vitepress: FoolModule = () => {
  return chain([
    fakeWindowProperty('__vitepress', true),
    fakeWindowProperty('__VP_HASH_MAP__', true)
  ]);
};

export default vitepress;
