//. events: .once, .on('x', callback)

const p = require('puppeteer');

(async () => {
    const browser = await p.launch().catch(reason => {console.log(reason)});
    const page = await browser.newPage().catch(reason => {console.log(reason)});
    page.on('load', () => console.log('PAGE LOADED!'));
    page.on('console', msg => {
        for(let i = 0; i < msg.args().length; ++i){
            console.log('CONSOLE MESSAGE:')
            console.log(`${i}: ${msg.args()[i]}`)
        }
    })
    await page.goto('https://erigato.space/TestingMultiplayer/?type=67b3dba8bc6778101892eb77249db32e', { waitUntil: 'load' }).catch(reason => {console.log(reason)});
    console.log('done')
})();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}