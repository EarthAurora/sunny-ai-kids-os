# Sunny AI for Kids Operations OS

This repository is the fictional product-demo build of a future private education-centre operating system. It is designed for Sunny to review whether one connected operating view can solve the team's current pain point: information and follow-up spread across separate sales, staffing, programme, inventory, calendar, meeting and reporting tools.

The Saturday presentation is a business-requirements discussion, not primarily a course-assignment walkthrough. The main journey demonstrates how a fictional school enquiry could move through class confirmation, tutor assignment, materials readiness, delivery follow-up and Sunny's management briefing. The public product demo intentionally links the fictional CRM, Staff Admin and inventory demonstration sites so Sunny can assess the connected experience.

## Operating model

The real-world design has three connected layers:

1. **Private Operations Hub** — the authenticated interface used by Sunny and her team.
2. **Systems of record** — CRM, Tutor Hub, WMS, calendar, accounting software and a private database hold live records.
3. **Obsidian Company Brain** — preserves approved policies, context, decisions, meeting knowledge, project learning and management reports.

AI workers sit across these layers. Each reads an approved scope, prepares a preview and writes only after human approval. Obsidian is a knowledge layer, not the authoritative database for raw personal, payroll, banking or accounting records.

## Product-demo outcome

The review should identify:

- the three must-have functions for the first private production release;
- the biggest missing workflow;
- the functions that can wait;
- the roles that need access and what each role may see or change;
- the actions that must always require human approval.

Level 2 and Level 3 materials remain available as secondary technical evidence.

## Included

- `README.md`: Product purpose, operating model, repository map, source record and safety boundary.
- `index.html`: Single-platform product-demo dashboard and connected operating journey.
- `daily-operations.html`: Fictional daily working scenario connecting tasks, eight platform views, all nine AI workers and Obsidian company memory.
- `sunny-review.html`: Business-requirements review for Sunny; responses stay in the browser and can be printed or saved as PDF.
- `architecture.html`: Real-world system and data-boundary map.
- `ai-workers.html`: Sunny AI worker register and approval model.
- `weather.html`: Static weather watch that fetches `data.json`; no weather values are hard-coded in its HTML.
- `data.json`: Latest saved, limited HKO weather fields used by the static weather page.
- `scripts/fetch-weather.mjs`: One key-free request to the official HKO Current Weather Report API, then saves only the displayed fields.
- `scripts/check-data.mjs`: CI validation for weather types, ranges, timestamp and warning-list shape.
- `level-2-evidence/`: Fictional inventory-cleaning workbook and rendered weekly, monthly and vault-health review evidence.
- `level-3-evidence/`: Fictional meeting-to-calendar workflow and downloadable `.ics` action reminders.
- `.github/workflows/update-weather.yml`: Runs every six hours and can be run manually with `workflow_dispatch`.

## Source and compliance record

- Source: [Hong Kong Observatory Current Weather Report via DATA.GOV.HK](https://data.gov.hk/en-data/dataset/hk-hko-rss-current-weather-report)
- API documentation: [HKO Open Data API Documentation](https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf)
- Robots check: [data.weather.gov.hk/robots.txt](https://data.weather.gov.hk/robots.txt) was checked on 2026-08-20. Its generic crawler rules list `/weatherAPI/` as disallowed. This project does not scrape a webpage; it uses HKO's separately documented machine-to-machine API once every six hours. Confirm this interpretation with the tutor if the assignment requires strict robots allowlisting for API endpoints.
- Terms/open-data evidence: HKO describes the data as machine-readable and the API as intended for machine-to-machine retrieval. No numeric provider rate limit was published in the official documentation reviewed; this client limits itself to one request every six hours.

## Safety and limits

- No API key, token, password, personal email, account or client data is included.
- All examples and people shown in this public repository are fictional presentation data.
- The linked CRM, Staff Admin and inventory sites are fictional demonstrations; they are not Sunny's production systems.
- Sunny's eventual production copy will be delivered separately and must use authentication, role-based database policies, audit logging and a private deployment.
- The Obsidian vault and live operational data are not published here.
- Weather is an operational prompt only. Check official warnings before any safety-critical decision or parent communication.
