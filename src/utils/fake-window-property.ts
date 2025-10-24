import { noop } from 'foxts/noop';
import { noobj } from './noop';

export function fakeWindowProperty(name: string, value: unknown = noobj) {
  if (name in window) {
    return noop
  }

  Object.defineProperty(window, name, {
    enumerable: false,
    configurable: true,
    get() {
      return value;
    }
  });
  return () => {
    delete window[name as any];
  };
}
