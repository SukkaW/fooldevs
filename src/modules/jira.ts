import type { FoolModule } from './_types';
import { fakeWindowProperty } from '../utils/fake-window-property';

const jira: FoolModule = () => fakeWindowProperty('jira', {
  id: ''
});

export default jira;
