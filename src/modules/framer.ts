import type { FoolModule } from '.';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const framer: FoolModule = () => {
  return chain([
    fakeWindowProperty('Framer', {
      version: '100',
      Animatable: true
    }),
    fakeWindowProperty('__framer_importFromPackage', true)
  ]);
};

export default framer;
