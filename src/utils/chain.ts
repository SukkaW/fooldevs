const doTask = (fn: VoidFunction) => fn();
export const chain = (fns: VoidFunction[]) => () => fns.forEach(doTask);
