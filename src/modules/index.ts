import _4TellBoost from './4tellboost';
import angular from './angular';
import framer from './framer';
import motion from './motion';
import nextjs from './nextjs';
import nuxt from './nuxt';
import react from './react';
import redux from './redux';
import solid from './solid';
import solidstart from './solidstart';
import svelte from './svelte';
import vite from './vite';
import vitepress from './vitepress';
import vue from './vue';

export interface FoolModule {
  (): VoidFunction,
  npm?: string
}

export const modules = {
  _4TellBoost,
  angular,
  framer,
  motion,
  nextjs,
  nuxt,
  react,
  redux,
  solid,
  solidstart,
  svelte,
  vite,
  vitepress,
  vue
} as const;

export const all = Object.values(modules);
