import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { lit_html as version } from './_version.json';

const lit_html: FoolModule = () => fakeWindowProperty('litHtmlVersions', version);
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  lit_html.npm = 'lit-html';
}

export default lit_html;
