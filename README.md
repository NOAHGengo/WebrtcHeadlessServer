#Construct Multiplayer Plugin HeadlessServer

#1. Clone this repository

#2. Change the url you want the server to point to in the start.js
await page.goto('THE_URL_TO_YOUR_HOST', { waitUntil: 'load' }).catch(reason => {console.log(reason)});

#3. Go to heroku and tell it you want to host a project on github and point it to your cloned repo

4# Add the buildpack
https://github.com/jontewks/puppeteer-heroku-buildpack
![Buildpack](https://i.imgur.com/H0SCg51.png)
