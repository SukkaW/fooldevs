import type { FoolModule } from '.';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const solidstart: FoolModule = () => chain([
  fakeWindowProperty('_$HY', {
    init: true
  })
]);

export default solidstart;
