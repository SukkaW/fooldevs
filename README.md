# fooldevs

To contest the developer of `Wappalyzer` going closed-source, this library aims to trick `Wappalyzer` into misidentifying web technologies used on your websites.

<p float="left">
  <img src="https://cdn.skk.moe/img/fooldevs/1.png" width="16%" />
  <img src="https://cdn.skk.moe/img/fooldevs/2.png" width="16%" />
  <img src="https://cdn.skk.moe/img/fooldevs/3.png" width="16%" />
  <img src="https://cdn.skk.moe/img/fooldevs/4.png" width="16%" />
  <img src="https://cdn.skk.moe/img/fooldevs/5.png" width="16%" />
  <img src="https://cdn.skk.moe/img/fooldevs/6.png" width="16%" />
</p>

## Installation

```bash
npm install fooldevs
yarn add fooldevs
pnpm add fooldevs
```

## Usage

**In your project**

```ts
import { enable, allModules, enableAll } from 'fooldevs';

// Enable specific modules
const cleanup = enable(allModules.react);

// Cleanup all modifications
cleanup();

// Enable all modules
const cleanup = enableAll();
```

**Include w/ npm CDN**

```html
<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/fooldevs@latest"></script>
<!-- unpkg -->
<!--<script src="https://unpkg.com/fooldevs@latest/dist/index.umd.min.js"></script>-->

<script>
  // Enable specific modules
  const cleanup = fooldevs.enable(fooldevs.allModules.react);

  // Cleanup all modifications
  cleanup();

  // Enable all modules
  const cleanupAll = fooldevs.enableAll();
</script>
```

**Usage with React**

```tsx
import { allModules } from 'fooldevs';
import { useFoolDevs, useFoolDevsAll } from 'fooldevs/react';

const mods = [allModules.wordpress, allModules.jquery];

const Component = () => {
  useFoolDevs(mods);
  return <div />;
};
```

## Inspirations

[`devfools`](https://github.com/thecuvii/devfools) made by [@thecuvii](https://github.com/thecuvii).

**Differences**

- `fooldevs` primarily focuses on tricking Wappalyzer with `window.[globalProperty]` and avoids DOM manipulation as much as possible. This enables maximum compatibility with various front-end frameworks and libraries.
- `fooldevs` provides clean up functions to revert the modifications made.
- `fooldevs` avoids breaking websites' functionality by only adding missing properties instead of overwriting existing ones, and still allows userland to set new values.
  - when new value is set by userland, `fooldevs` will not clean up the property to avoid breaking websites.

## License

[MIT](./LICENSE)

----

**fooldevs** © [Sukka](https://github.com/SukkaW), Authored and maintained by Sukka with help from contributors ([list](https://github.com/SukkaW/fooldevs/graphs/contributors)).

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)

<p align="center">
  <a href="https://github.com/sponsors/SukkaW/">
    <img src="https://sponsor.cdn.skk.moe/sponsors.svg"/>
  </a>
</p>
