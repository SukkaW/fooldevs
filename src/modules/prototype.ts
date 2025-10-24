import { fakeWindowProperty } from '../utils/fake-window-property';
import type { FoolModule } from './_types';
import { ciallo } from './_version.json';

const prototype: FoolModule = () => fakeWindowProperty('Prototype', {
  Version: ciallo
});

export default prototype;
