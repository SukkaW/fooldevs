import type { FoolModule } from './_types';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { framer_motion as version } from './_version.json';

const framer: FoolModule = () => chain([
  fakeWindowProperty('Framer', {
    version,
    Animatable: true
  }),
  fakeWindowProperty('__framer_importFromPackage', true)
]);

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  framer.npm = 'framer-motion';
}

export default framer;
