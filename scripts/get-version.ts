import { writeFileSync } from 'fs';
import version from 'latest-version';
import { join } from 'path';
import { all } from '../src';

process.env.LATEST_VERSION_SCRIPT = 'true';

const normalizeNpm = (name: string) => name
  .replaceAll('@', '')
  .replaceAll('/', '_')
  .replaceAll('-', '_')
  .replaceAll('.', '_');

(async () => {
  const ret: Record<string, string> = {};

  await Promise.all(all.map(async (mod) => {
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
