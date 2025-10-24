import type { FoolModule } from './_types';

import { fakeWindowProperty } from '../utils/fake-window-property';

const hubspot: FoolModule = () => fakeWindowProperty('hubspot');

export default hubspot;
