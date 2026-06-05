# GCP Service Exception Posture

GCP Service Exception Posture is a Kinetic Gain platform-signal repo for **GCP**. It turns synthetic cloud governance signals into a board-ready view of exposure, savings, investment priority, and the story leaders can tell.

## Board question

> Which GCP exceptions expose data, budget, or perimeter controls before the next board review?

## What it scores

- **Cloud Run egress exception** — network; owner: Platform engineering; next action: Expire temporary egress and bind workload identity to approved service accounts
- **BigQuery export perimeter gap** — data; owner: Data platform; next action: Attach export job to approved VPC Service Controls perimeter
- **Budget alert owner drift** — finops; owner: Cloud finance; next action: Assign budget alerts to service owner and escalation rota

## Run locally

`ash
npm test
npm start
npm start -- --json
`

## Example output

`	ext
# GCP Service Exception Posture
GCP: watch posture, risk score from synthetic signals, recoverable or protected value surfaced for executive review.
`

## Data posture

This repo uses synthetic demonstration data only. It does not connect to live GCP tenants, export customer records, or store credentials.

## Portfolio connection

- Platform signal: $(System.Collections.Hashtable.Platform)
- Domain: $(System.Collections.Hashtable.Domain)
- Live surface family: [https://gcp.kineticgain.com/](https://gcp.kineticgain.com/)
- Apex: [https://kineticgain.com/](https://kineticgain.com/)
- Portfolio: [https://portfolio.kineticgain.com/](https://portfolio.kineticgain.com/)
