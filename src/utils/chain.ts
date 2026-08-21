export function chain(fns: VoidFunction[]) {
  return () => {
    if (!Array.isArray(fns)) return;
    for (let i = 0, len = fns.length; i < len; i++) {
      const fn = fns[i];
      if (typeof fn !== 'function') {
        if (process.env.NODE_ENV === 'development') {
          console.warn('chain: encountered a non-function value, skipping.', fn);
        }
        continue;
      }
      fn();
    }
  };
}
