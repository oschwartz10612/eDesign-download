const http = require('http');
const fs = require('fs');

var pages = [2595625581, 2595625588, 2595625594, 2595625600, 2595625606, 2595625612, 2595625618, 2595625624, 2595625630, 2595625626, 2595625620, 2595625614, 2595625608];
var ticket = "efacfcbe-24f6-4ad1-86d3-ee5fe8d0c91e";
var session_id = "b7047b3db02812810a5cc717040a";

for (var i = 0; i < pages.length; i++) {
  const file = fs.createWriteStream("./pages/" + pages[i] + ".pdf");
  const request = http.get("http://hj1.hjedesign.com/eDesignServices/RenderPDFServlet/2-3.pdf?v=53.0.55.2&ticketid=" + ticket + "&command=render[spreadid=" + pages[i] + ",hires]&svg=null&JSESSIONID=" + session_id, function(response) {
    response.pipe(file);
  });
}
