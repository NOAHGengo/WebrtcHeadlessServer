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
    await page.goto('https://elated-lovelace-b8e796.netlify.app/', { waitUntil: 'load' }).catch(reason => {console.log(reason)});
    console.log('done')
})();

http.listen(port, function()
{
  console.log('listening on *:' + port);
});
