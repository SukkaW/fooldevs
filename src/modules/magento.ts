import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const magento = () => {
  chain([
    fakeWindowProperty('Mage', ''),
    fakeWindowProperty('VarienForm', '')
  ]);
};

export default magento;
