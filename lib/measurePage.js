const puppeteer = require('puppeteer');

const measurePage = async (thePage, idpToken, params) => {

    // do some setup
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage({
        waitUntil: 'domcontentloaded',
    });

    // disable the cache
    await page.setCacheEnabled(false);

    // set a user agent...
    const userAgent = await browser.userAgent();
    await page.setUserAgent(`Perfmon`);
    await page.evaluate('navigator.userAgent');

    // set the viewport...
    const viewport = {
        width: 1024,
        height: 800,
        deviceScaleFactor: 2,
    };
    await page.setViewport(viewport);

    // set the cookie
    const cookie = {
        name: 'auth_idp',
        value: idpToken,
        domain: params.env === 'test' ? '.test-godaddy.com' : '.godaddy.com',
        url: params.env === 'test' ? 'https://test-godaddy.com' : 'https://godaddy.com',
        path: '/',
        httpOnly: true,
        secure: true
    }
    await page.setCookie(cookie);

    // do our page measurements...
    const outputArray = [];
    for (x = 0; x < params.numberOfProbes; x++) {
        if (params.debug) {
            console.log('Probe:', x);
        }
        // navigate to the page
        await page.goto(thePage);
        const content = await page.content();
        // console.log(content);

        // get the perfentries
        const perfEntries = JSON.parse(
            await page.evaluate(() => JSON.stringify(performance.getEntries()))
        );

        outputArray.push(perfEntries[1]);
        if (x !== params.numberOfProbes -1) {
            if (params.debug) {
                console.log('Sleeping:', params.timeBetweenProbes);
            }
            await sleep(params.timeBetweenProbes);
        }
    }

    // shut it down...
    browser.close();

    return outputArray;
}

// super simple sleep
const sleep = (seconds) => (
    new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    })
);

module.exports = measurePage;
