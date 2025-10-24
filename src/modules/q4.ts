import type { FoolModule } from './_types';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const q4: FoolModule = () => chain([
  fakeWindowProperty('q4App', {
    a11yAnnouncement: ''
  }),
  fakeWindowProperty('q4Defaults', {
    fancySignup: ''
  })
]);

export default q4;
