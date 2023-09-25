const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log(`The URL for the request was '${req.url}`);
  //console.log(`The method for the request was '${req.method}`);
  //console.log(res);

  const fileNameOfUrl = (url) => {
    let fileName = "";
    if (req.url.split("/")[1] === "") {
      fileName = "index.html";
    } else {
      fileName = req.url.split("/")[1];
    }
    return fileName;
  };

  const fileName = fileNameOfUrl(req.url);
  if (fileName === "favicon.ico") {
    res.statusCode = 404;
    res.end("");
    return;
  }

  const getFileContentOr404 = (fileName) => {
    if (!fs.existsSync(`./static/${fileName}`)) {
      fileName = "404.html";
    }

    return fs.readFileSync(`./static/${fileName}`, "utf-8");
  };

  const content = getFileContentOr404(fileName);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(content);
});

const hostname = "localhost";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
