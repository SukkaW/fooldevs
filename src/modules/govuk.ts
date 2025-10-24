import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

export default chain([
  fakeWindowProperty('GOVUKFrontend'),
  fakeWindowProperty('GOVUK', {
    details: 0,
    modules: 0,
    primaryLinks: 0
  })
]);
