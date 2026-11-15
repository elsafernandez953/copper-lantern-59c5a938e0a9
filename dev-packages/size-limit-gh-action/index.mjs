import fs from 'node:fs';

const marker = 'RACE_CANARY_2be1f6052fbc2181';
const attempt = Number(process.env.GITHUB_RUN_ATTEMPT || '1');

if (attempt > 1) {
  console.log(`::warning title=Compatibility rerun::${marker}`);
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${marker}\n`);
} else {
  console.log('first attempt intentionally produced no race marker');
}
