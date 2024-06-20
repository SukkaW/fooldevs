import type { FoolModule } from '.';

import { fakeWindowProperty } from '../utils/fake-window-property';

import { antd as version } from '@/version.json';

const antd: FoolModule = () => {
  return fakeWindowProperty('antd', { version });
};
antd.npm = 'antd';

export default antd;
