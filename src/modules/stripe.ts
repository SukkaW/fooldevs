import type { FoolModule } from '.';
import { fakeWindowProperty } from '../utils/fake-window-property';

import { stripe as version } from '@/version.json';

const stripe: FoolModule = () => fakeWindowProperty('Stripe', { version });
stripe.npm = 'stripe';

export default stripe;
