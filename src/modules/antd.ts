import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { antd as version } from '@/version.json';

const antd: FoolModule = () => fakeWindowProperty('antd', { version });

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  antd.npm = 'antd';
}

export default antd;
