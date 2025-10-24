import type { FoolModule } from './_';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { lit_html as version } from '@/version.json';

const lit_html: FoolModule = () => fakeWindowProperty('litHtmlVersions', version);
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  lit_html.npm = 'lit-html';
}

export default lit_html;
