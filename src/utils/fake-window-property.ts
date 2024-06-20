import { noobj, noop } from './noop';

export const fakeWindowProperty = (name: string, value: unknown = noobj) => {
  if (name in window) return noop;
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
};
