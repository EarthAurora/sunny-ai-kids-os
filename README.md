# Sunny AI for Kids Operations OS

Level 2 Personal OS adapted as an education-centre operations hub. It links the Sunny inventory WMS with a classroom weather watch for activity planning.

## Included

- `index.html`: Operations OS home screen and WMS entry point.
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
- Weather is an operational prompt only. Check official warnings before any safety-critical decision or parent communication.
