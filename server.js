const http = require("http");
const fs = require("fs");
const homePage = "./public/index.html";
const aboutPage = "./public/about.html";
const salesPage = "./public/sales.html";

const items = [
  { name: "i-phone", price: 550, img: "https://did.li/XhINf" },
  { name: "Watch", price: 220, img: "https://did.li/BnrCN" },
  { name: "Speaker", price: 190, img: "https://did.li/SyTfT" },
  { name: "computer", price: 720, img: "https://did.li/0JlTY" },
  { name: "book", price: 50, img: "https://did.li/qVNw5" },
];

const item = { name: "i-phone", price: 550, img: "https://did.li/XhINf" };

const products = JSON.stringify(items);
const product = JSON.stringify(item);

const server = http.createServer((request, response) => {
  let url = request.url;
  switch (url) {
    case "/":
      fs.readFile(homePage, "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.write("page not found!");
        } else {
          response.writeHead(200);
          response.write(data);
        }
        response.end();
      });
      break;
    case "/about":
      fs.readFile(aboutPage, "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.write("page not found!");
        } else {
          response.writeHead(200);
          response.write(data);
        }
        response.end();
      });
      break;
    case "/sales":
      fs.readFile(salesPage, "utf8", (err, data) => {
        if (err) {
          response.writeHead(404);
          response.write("page not found!");
        } else {
          response.writeHead(200);
          response.write(data);
        }
        response.end();
      });
      break;
    case "/products":
      response.writeHead(200);
      response.write(products);
      response.end();
      break;
    case "/product":
      response.writeHead(200);
      response.write(product);
      response.end();
      break;
    case "/CSS/style.css":
      fs.readFile("./public/CSS/style.css", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("wrong");
        } else {
          res.writeHead(200, { "content-type": "text/css" });
          res.write(data);
        }
        res.end();
      });
    default:
      response.writeHead(404);
      response.write("page not found");
      response.end();
  }
});

server.listen(1000);
