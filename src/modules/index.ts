import _4TellBoost from './4tellboost';
import angular from './angular';
import antd from './antd';
import codemirror from './codemirror';
import framer from './framer';
import gsap from './gsap';
import monaco from './manoco';
import mobx from './mobx';
import motion from './motion';
import nextjs from './nextjs';
import ngmaterial from './ngmaterial';
import nuxt from './nuxt';
import react from './react';
import redux from './redux';
import remix from './remix';
import rive from './rive';
import sentry from './sentry';
import solid from './solid';
import solidstart from './solidstart';
import svelte from './svelte';
import tailwind from './tailwind';
import threejs from './threejs';
import vite from './vite';
import vitepress from './vitepress';
import vue from './vue';
import vuepress from './vuepress';
import webpack from './webpack';

export interface FoolModule {
  (): VoidFunction,
  npm?: string
}

export const modules = {
  _4TellBoost,
  angular,
  antd,
  codemirror,
  framer,
  gsap,
  mobx,
  monaco,
  motion,
  nextjs,
  ngmaterial,
  nuxt,
  react,
  redux,
  remix,
  rive,
  sentry,
  solid,
  solidstart,
  svelte,
  tailwind,
  threejs,
  vite,
  vitepress,
  vue,
  vuepress,
  webpack
} as const;

export const all = Object.values(modules);
