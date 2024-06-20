import type { FoolModule } from '.';

import { noop } from '../utils/noop';

const angular: FoolModule = () => {
  if (document.body.hasAttribute('ng-version')) {
    return noop;
  }
  document.body.setAttribute('ng-version', '17.0.3');
  return () => {
    document.body.removeAttribute('ng-version');
  };
};

export default angular;
