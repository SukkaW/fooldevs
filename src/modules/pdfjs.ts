// PDFJS
import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { pdfjs as version } from './_version.json';

const pdfjs: FoolModule = () => fakeWindowProperty('PDFJS', {
  version
});

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  pdfjs.npm = 'pdfjs';
}

export default pdfjs;
