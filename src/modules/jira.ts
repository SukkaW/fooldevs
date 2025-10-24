import type { FoolModule } from './_';
import { fakeWindowProperty } from '../utils/fake-window-property';

const jira: FoolModule = () => fakeWindowProperty('jira', {
  id: ''
});

export default jira;
