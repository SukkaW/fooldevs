import _4TellBoost from './4tellboost';
import angular from './angular';
import antd from './antd';
import babel from './babel';
import codemirror from './codemirror';
import framer from './framer';
import googleAnalytics from './googleAnalytics';
import gsap from './gsap';
import hljs from './hljs';
import htmx from './htmx';
import hyperscript from './hyperscript';
import lit_element from './lit_element';
import lit_html from './lit_html';
import magento from './magento';
import magisto from './magisto';
import monaco from './manoco';
import mobx from './mobx';
import motion from './motion';
import nextjs from './nextjs';
import ngmaterial from './ngmaterial';
import nuxt from './nuxt';
import prism from './prism';
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
import umami from './umami';
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
  babel,
  codemirror,
  framer,
  googleAnalytics,
  gsap,
  hljs,
  htmx,
  hyperscript,
  lit_element,
  lit_html,
  magento,
  magisto,
  mobx,
  monaco,
  motion,
  nextjs,
  ngmaterial,
  nuxt,
  prism,
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
  umami,
  vite,
  vitepress,
  vue,
  vuepress,
  webpack
} as const;

export const all = Object.values(modules);
