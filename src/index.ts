import type { FoolModule } from './modules';
import { chain } from './utils/chain';
import { modules } from './modules';

export function enable(mods: FoolModule[]) {
  const cleanups = mods.reduce<VoidFunction[]>((acc, cur) => {
    acc.push(cur());
    return acc;
  }, []);
  return chain(cleanups);
}

export const allModules = Object.values(modules);
export const enableAll = () => enable(Object.values(allModules));

export { modules };

export type { FoolModule };
