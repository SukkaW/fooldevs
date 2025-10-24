'use client';

import { useEffect } from 'react';
import { enable, enableAll } from '.';
import type { FoolModule } from '.';

export function useFoolDevs(mods: FoolModule[]) {
  useEffect(() => enable(mods), [mods]);
}

export function useFoolDevsAll() {
  useEffect(() => enableAll(), []);
}

export function FoolDevsAll(): React.ReactNode {
  useFoolDevsAll();
  return null;
}
