import { writeFileSync } from 'node:fs';
import version from 'latest-version';
import { join } from 'node:path';
import { allModules } from '@/index';

process.env.LATEST_VERSION_SCRIPT = 'true';

function normalizeNpm(name: string) {
  return name
    .replaceAll('@', '')
    .replaceAll('/', '_')
    .replaceAll('-', '_')
    .replaceAll('.', '_');
}

(async () => {
  const ret: Record<string, string> = {};

  await Promise.all(allModules.map(async (mod) => {
    if ('npm' in mod && mod.npm) {
      ret[normalizeNpm(mod.npm)] = await version(mod.npm);
    }
  }));

  const sortedRet = Object.keys(ret).sort().reduce<Record<string, string>>((acc, key) => {
    acc[key] = ret[key];
    return acc;
  }, {});

  writeFileSync(
    join(__dirname, '../src/version.json'),
    `${JSON.stringify(sortedRet, null, 2) || '{}'}\n`
  );
})();
