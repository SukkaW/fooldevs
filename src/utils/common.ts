import type { FoolModule } from '../modules';
import { chain } from './chain';
import { fakeWindowProperty } from './fake-window-property';

export function withWindowProperty(...name: string[]): FoolModule {
  return () => chain(name.map(fakeWindowProperty));
}
