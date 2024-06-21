import type { FoolModule } from '.';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const magisto: FoolModule = () => chain([
  fakeWindowProperty('MagistoPlayerFrame', ''),
  fakeWindowProperty('magisto_server', '')
]);

export default magisto;
