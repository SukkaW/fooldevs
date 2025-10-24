import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';
import { ciallo } from './_version.json';

const unifi: FoolModule = () => fakeWindowProperty('unifiConstant', {
  VERSION: ciallo
});

export default unifi;
