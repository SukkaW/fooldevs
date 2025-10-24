// PDFJS
import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';
import { pdfjs as version } from '@/version.json';

const pdfjs: FoolModule = () => fakeWindowProperty('PDFJS', {
  version
});

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  pdfjs.npm = 'pdfjs';
}

export default pdfjs;
