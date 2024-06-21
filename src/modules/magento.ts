import type { FoolModule } from '.';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const magento: FoolModule = () => chain([
  fakeWindowProperty('Mage', ''),
  fakeWindowProperty('VarienForm', '')
]);

export default magento;
