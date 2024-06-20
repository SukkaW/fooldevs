import { withWindowProperty } from '../utils/common';

const shopify = withWindowProperty(
  'SHOPIFY_API_BASE_URL',
  'ShopifyAPI',
  'Shopify',
  'ShopifyCustomer',
  'shopifyAccessUrl'
);

export default shopify;
