import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { stripe as version } from '@/version.json';

const stripe: FoolModule = () => fakeWindowProperty('Stripe', { version });
if (process.env.LATEST_VERSION_SCRIPT === 'true') {
  stripe.npm = 'stripe';
}

export default stripe;
