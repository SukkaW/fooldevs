import { writeFileSync } from 'fs';
import version from 'latest-version';
import { join } from 'path';
import { all } from '../src';

(async () => {
  const ret: Record<string, string> = {};

  await Promise.all(
    all.map(async (mod) => {
      if ('npm' in mod && mod.npm) {
        ret[mod.npm] = await version(mod.npm);
      }
    })
  );

  writeFileSync(
    join(__dirname, '../src/version.json'),
    JSON.stringify(ret, null, 2) || '{}'
  );
})();
