import type { FoolModule } from '.';
import { chain } from '../utils/chain';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { prismjs as version } from '@/version.json';

const prism: FoolModule = () => {
  return chain([
    fakeWindowProperty('Prism'),
    fakeWindowProperty('apex', {
      libVersions: { prismJs: { version } }
    })
  ]);
};

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  prism.npm = 'prismjs';
}

export default prism;
