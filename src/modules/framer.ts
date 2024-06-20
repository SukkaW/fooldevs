import type { FoolModule } from '.';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { framer_motion as version } from '@/version.json';

const framer: FoolModule = () => {
  return chain([
    fakeWindowProperty('Framer', {
      version,
      Animatable: true
    }),
    fakeWindowProperty('__framer_importFromPackage', true)
  ]);
};

framer.npm = 'framer-motion';

export default framer;
