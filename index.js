const http = require('http');
const fs = require('fs');
const express = require('express');
const chromeLauncher = require('chrome-launcher');
const app = express();
const port = 4000;

var chrome = chromeLauncher.launch({
  startingUrl: 'http://localhost:4000'
}).then(chrome => {
  console.log(`Chrome debugging port running on ${chrome.port}`);

  app.use(express.static('public'));

  app.set('view engine', 'ejs');

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/kill', function (req, res) {
    chrome.kill();
    process.exit();
  });

  app.post('/run', express.urlencoded({ extended: true }), function (req, res) {
    var pages = req.body.pages.split(',');
    for (var i = 0; i < pages.length; i++) {
      const file = fs.createWriteStream(req.body.path + pages[i] + ".pdf");
      const request = http.get("http://hj1.hjedesign.com/eDesignServices/RenderPDFServlet/file.pdf?ticketid=" + req.body.ticket + "&command=render[spreadid=" + pages[i] + ",hires]&svg=null&JSESSIONID=" + req.body.session_id, function(response) {
        response.pipe(file);

      });
    }
    res.render('done');
  });

  app.listen(port, () => console.log(`App listening on port ${port}!`));

//chrome
});
