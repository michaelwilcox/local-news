# local-news

Daily snapshot of local news across the country.

# Run Locally

```bash
npm install
node index.js
```

# How it works

Parses the JSON site list and calls [puppeteer](https://github.com/puppeteer/puppeteer) to take a screenshot for frontpage of each website. The screenshots are saved into a `screens` folder. The sites list is editable to add/remove sites.

# Why?

With covid-19, and as states start to re-open, my goal is to get a better understanding what is happening across the United States at a micro, state level. It is just an experiment.