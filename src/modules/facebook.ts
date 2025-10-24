import { chain } from '../utils/chain';
import { fakeWindowProperty } from '../utils/fake-window-property';

export default chain([
  fakeWindowProperty('facebookChatSettings'),
  fakeWindowProperty('_fbq'),
  fakeWindowProperty('FB', {
    getLoginStatus: 0
  })
]);
