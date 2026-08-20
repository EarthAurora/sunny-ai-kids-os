# Sunny AI for Kids Operations OS

This repository is the fictional presentation build of a future private education-centre operating system. It demonstrates how Sunny and her team could navigate operational modules, use controlled AI workers and preserve company knowledge without publishing real client, learner, staff or financial records.

## Operating model

The real-world design has three connected layers:

1. **Private Operations Hub** — the authenticated interface used by Sunny and her team.
2. **Systems of record** — CRM, Tutor Hub, WMS, calendar, accounting software and a private database hold live records.
3. **Obsidian Company Brain** — preserves approved policies, context, decisions, meeting knowledge, project learning and management reports.

AI workers sit across these layers. Each reads an approved scope, prepares a preview and writes only after human approval. Obsidian is a knowledge layer, not the authoritative database for raw personal, payroll, banking or accounting records.

## Included

- `index.html`: Operations OS home screen and WMS entry point.
- `architecture.html`: Real-world system and data-boundary map.
- `ai-workers.html`: Sunny AI worker register and approval model.
- `weather.html`: Static weather watch that fetches `data.json`; no weather values are hard-coded in its HTML.
- `scripts/fetch-weather.mjs`: One key-free request to the official HKO Current Weather Report API, then saves only the displayed fields.
- `.github/workflows/update-weather.yml`: Runs every six hours and can be run manually with `workflow_dispatch`.

## Source and compliance record

- Source: [Hong Kong Observatory Current Weather Report via DATA.GOV.HK](https://data.gov.hk/en-data/dataset/hk-hko-rss-current-weather-report)
- API documentation: [HKO Open Data API Documentation](https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf)
- Robots check: [data.weather.gov.hk/robots.txt](https://data.weather.gov.hk/robots.txt) was checked on 2026-08-20. Its generic crawler rules list `/weatherAPI/` as disallowed. This project does not scrape a webpage; it uses HKO's separately documented machine-to-machine API once every six hours. Confirm this interpretation with the tutor if the assignment requires strict robots allowlisting for API endpoints.
- Terms/open-data evidence: HKO describes the data as machine-readable and the API as intended for machine-to-machine retrieval. No numeric provider rate limit was published in the official documentation reviewed; this client limits itself to one request every six hours.

## Safety and limits

- No API key, token, password, personal email, account or client data is included.
- All examples and people shown in this public repository are fictional presentation data.
- The production copy must use authentication, role-based database policies, audit logging and a private deployment.
- The Obsidian vault and live operational data are not published here.
- Weather is an operational prompt only. Check official warnings before any safety-critical decision or parent communication.
