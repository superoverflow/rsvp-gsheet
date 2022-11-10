This is a demo using google sheet as data storage for a simple RSVP 

## Getting Started

First, run the development server:

```bash
# include below env variables in .env.local
GOOGLE_CLIENT_EMAIL=<service-account-name>@<your gcp project>.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n......\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=<google sheet id>


yarn dev
```

## Live Demo
- (Demo)[https://rsvp-gsheet.vercel.app/rsvp]
- (GSheet)[https://docs.google.com/spreadsheets/d/1kspesLqIszPAM45-Y7d4M10TPKWyBPoGj2xubVYlPsE]