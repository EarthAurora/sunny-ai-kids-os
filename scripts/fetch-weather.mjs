import { writeFile } from 'node:fs/promises';

const sourceUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';
const response = await fetch(sourceUrl, { headers: { 'user-agent': 'sunny-ai-kids-os-course-project/1.0' } });
if (!response.ok) throw new Error(`HKO request failed: ${response.status}`);
const source = await response.json();
const temperature = source.temperature?.data?.find(reading => reading.place === 'Hong Kong Observatory') ?? source.temperature?.data?.[0] ?? {};
const humidity = source.humidity?.data?.[0] ?? {};
const warnings = Array.isArray(source.warningMessage) ? source.warningMessage.filter(Boolean) : source.warningMessage ? [source.warningMessage] : [];
const data = { fetchedAt: new Date().toISOString(), source: { name: 'Hong Kong Observatory current weather report via DATA.GOV.HK', url: sourceUrl, documentation: 'https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf', dataset: 'https://data.gov.hk/en-data/dataset/hk-hko-rss-current-weather-report', robots: 'https://data.weather.gov.hk/robots.txt', clientFrequency: 'One API request every six hours' }, weather: { temperature: temperature.value ?? null, temperatureUnit: temperature.unit ?? '°C', humidity: humidity.value ?? null, humidityUnit: humidity.unit ?? '%', observedAt: temperature.recordTime ?? source.updateTime ?? null, warnings } };
if (data.weather.temperature === null || data.weather.humidity === null) throw new Error('Expected weather fields were missing');
await writeFile(new URL('../data.json', import.meta.url), `${JSON.stringify(data, null, 2)}\n`);
