# Sentio

Sentio is a lightweight static web demo for healthier study routines. It includes a focus dashboard, readiness insights, a session timer, and a BH1750 light-sensor simulation.

## Live site

- Main dashboard: https://sentiobyrichasians.netlify.app/
- Light sensor demo: https://sentiobyrichasians.netlify.app/bh1750.html

## Using the demo

1. Open the main dashboard and choose **Tap trung**.
2. Set a session duration and start the timer.
3. Use the check-in and progress sections to review your routine.
4. Open **Coco** to visit the BH1750 sensor simulation.
5. In the sensor demo, toggle the light state and open the data view to inspect sample readings or download a CSV.

## Important note

This is a front-end prototype. The BH1750 page uses simulated readings and does not claim a real hardware connection. The sensor concept is based on BH1750 over I2C with an ESP32; the sample wiring and thresholds are for demonstration only.

## Run locally

Serve the project from a local web server instead of opening the HTML files directly:

```bash
python -m http.server 8000
```

Then open http://127.0.0.1:8000/.

## Project structure

- `index.html`: Sentio dashboard and onboarding flow
- `bh1750.html`: BH1750 light-sensor simulation
- `styles.css` and feature CSS files: visual system and responsive layout
- `app.js`, `sentio-timer.js`, `bh1750.js`, and feature scripts: interactions and demo state
- `sentio-logo.jpg`, `coco.png.png`: visual assets
