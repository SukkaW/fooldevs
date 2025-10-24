import { noop } from 'foxts/noop';

const noobj = {};

export function fakeWindowProperty(name: string, value: unknown = noobj) {
  if (name in window) {
    return noop;
  }

  Object.defineProperty(window, name, {
    enumerable: false,
    configurable: true,
    get() {
      return value;
    }
  });
  return () => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- safe since we already know we set it
    delete window[name as keyof Window];
  };
}
