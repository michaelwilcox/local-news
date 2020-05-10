const fs = require('fs-extra');
const puppeteer = require('puppeteer');

const SCREENS_PATH = './screens';

async function startScrape(siteList) {
    try {
        await fs.removeSync(SCREENS_PATH);
        const dir = await fs.ensureDirSync(SCREENS_PATH);
    } catch (e) {
        console.error(e);
    }

    const { sites } = siteList;
    for (let site of sites) { await takeScreenshot(site) };
}

async function takeScreenshot(site) {
    return new Promise(async (resolve, reject) => {
        try {
            let browser = await puppeteer.launch({ headless: false });
            let page = await browser.newPage();
            await fs.ensureDirSync(`${SCREENS_PATH}/${site.state}`);
            await page.goto(site.url);
            await page.screenshot({ 
                path: `./${SCREENS_PATH}/${site.state}/${site.id}.jpg`, 
                type: 'jpeg',
                fullPage: true
            });
            await page.close();
            await browser.close();
            resolve();
        } catch (e) {
            console.error(e);
            resolve();
        }
    });
}

async function main() {
    try {
        const siteList = await fs.readJson('./sites.json');
        startScrape(siteList);
    } catch (e) {
        console.error(e);
    }
}

main();