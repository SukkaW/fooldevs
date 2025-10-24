import _4TellBoost from './4tellboost';
import angular from './angular';
import antd from './antd';
import babel from './babel';
import bitbucket from './bitbucket';
import codemirror from './codemirror';
import corejs from './corejs';
import crypto_js from './crypto_js';
import d3 from './d3';
import django from './django';
import flowplayer from './flowplayer';
import framer from './framer';
import googleAnalytics from './googleAnalytics';
import gsap from './gsap';
import hammer_js from './hammer_js';
import handlebars from './handlebars';
import hljs from './hljs';
import htmx from './htmx';
import hyperscript from './hyperscript';
import ionic from './ionic';
import jira from './jira';
import jquery from './jquery';
import lit_element from './lit_element';
import lit_html from './lit_html';
import lodash from './lodash';
import magento from './magento';
import magisto from './magisto';
import monaco from './manoco';
import mobx from './mobx';
import motion from './motion';
import nextjs from './nextjs';
import ngmaterial from './ngmaterial';
import nuxt from './nuxt';
import prism from './prism';
import q4 from './q4';
import qstomizer from './qstomizer';
import quanta from './quanta';
import quantcast_measure from './quantcast_measure';
import qubit from './qubit';
import react from './react';
import redux from './redux';
import remix from './remix';
import rive from './rive';
import sentry from './sentry';
import shopify from './shopify';
import socket_io from './socket_io';
import solid from './solid';
import solidstart from './solidstart';
import stripe from './stripe';
import svelte from './svelte';
import swagger_ui from './swagger_ui';
import swagify from './swagify';
import tailwind from './tailwind';
import threejs from './threejs';
import typekit from './typekit';
import umami from './umami';
import uswds from './uswds';
import vite from './vite';
import vitepress from './vitepress';
import vue from './vue';
import vuepress from './vuepress';
import webpack from './webpack';
import wordpress from './wordpress';
import xoops from './xoops';

export interface FoolModule {
  (): VoidFunction,
  npm?: string
}

export const modules: Record<string, FoolModule> = {
  _4TellBoost,
  angular,
  antd,
  babel,
  bitbucket,
  codemirror,
  corejs,
  crypto_js,
  d3,
  django,
  flowplayer,
  framer,
  googleAnalytics,
  gsap,
  hammer_js,
  handlebars,
  hljs,
  htmx,
  hyperscript,
  ionic,
  jira,
  jquery,
  lit_element,
  lit_html,
  lodash,
  magento,
  magisto,
  mobx,
  monaco,
  motion,
  nextjs,
  ngmaterial,
  nuxt,
  prism,
  q4,
  qstomizer,
  quanta,
  quantcast_measure,
  qubit,
  uswds,
  react,
  redux,
  remix,
  rive,
  sentry,
  socket_io,
  solid,
  solidstart,
  shopify,
  stripe,
  svelte,
  swagger_ui,
  swagify,
  tailwind,
  threejs,
  typekit,
  umami,
  vite,
  vitepress,
  vue,
  vuepress,
  webpack,
  wordpress,
  xoops
};
