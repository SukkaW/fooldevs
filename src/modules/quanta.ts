import type { FoolModule } from './_types';
import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

const quanta: FoolModule = () => chain([
  fakeWindowProperty('QUANTA', {
    app_id: ''
  }),
  fakeWindowProperty('QuantaTagRUMSpeedIndex', '')
]);

export default quanta;
