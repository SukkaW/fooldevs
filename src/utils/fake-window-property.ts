import { noop } from 'foxts/noop';

const noobj = {};

const noValueDefault = Symbol('no value default');

export function fakeWindowProperty(name: string, value: unknown = noobj) {
  if (typeof window === 'undefined') {
    return noop;
  }

  if (name in window) {
    return noop;
  }

  // track new value set by userland
  let newValue = noValueDefault;

  Object.defineProperty(window, name, {
    enumerable: false,
    configurable: true,
    get() {
      if (newValue !== noValueDefault) {
        return newValue;
      }
      return value;
    },
    set(v) {
      newValue = v;
    }
  });
  return () => {
    // we only clean up our fake property if userland didn't set a new value
    if (newValue === noValueDefault) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- safe since we already know we set it
      delete window[name as keyof Window];
    }
  };
}
