import type { FoolModule } from './modules';
import { chain } from './utils/chain';

export const enable = (mods: FoolModule[]) => {
  const cleanups = mods.reduce<VoidFunction[]>((acc, cur) => {
    acc.push(cur());
    return acc;
  }, []);
  return chain(cleanups);
};
export { modules, all } from './modules';

export type { FoolModule };
