//. events: .once, .on('x', callback)
const app = require('polka')();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
const p = require('puppeteer');
(async () => {
    const browser = await p.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}).catch(reason => {console.log(reason)});
    const page = await browser.newPage().catch(reason => {console.log(reason)});
    page.on('load', () => console.log('PAGE LOADED!'));
    page.on('console', msg => {
        for(let i = 0; i < msg.args().length; ++i){
            console.log('CONSOLE MESSAGE:')
            console.log(`${i}: ${msg.args()[i]}`)
        }
    })
    //Erigato test page
    //await page.goto('https://erigato.space/TestingMultiplayer/?type=67b3dba8bc6778101892eb77249db32e', { waitUntil: 'load' }).catch(reason => {console.log(reason)});
    //relixes test page
    console.log('done')
})();

http.listen(port, function()
{
  console.log('listening on *:' + port);
});
