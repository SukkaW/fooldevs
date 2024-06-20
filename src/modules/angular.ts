import type { FoolModule } from '.';

import { noop } from '../utils/noop';
import { angular_core as version } from '@/version.json';

const angular: FoolModule = () => {
  if (document.body.hasAttribute('ng-version')) {
    return noop;
  }
  document.body.setAttribute('ng-version', version);
  return () => {
    document.body.removeAttribute('ng-version');
  };
};

if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  angular.npm = '@angular/core';
}

export default angular;
