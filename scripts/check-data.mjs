import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const data = JSON.parse(await readFile(new URL('../data.json', import.meta.url)));
assert.ok(data.fetchedAt && data.source?.url && data.weather);
assert.notEqual(data.weather.temperature, null);
assert.notEqual(data.weather.humidity, null);
console.log('Weather data check passed.');
