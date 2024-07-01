const fs = require("fs");

// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.appendFileSync("file.txt", "\nHello World !", "utf-8", (err) => {
//   console.log("Appended!");
// })

// create dir
// fs.mkdir("dir", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("dir formed");
// });

// remove dir
// fs.rmdir("dir", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("dir deleted");
// });

// rename a file
// fs.rename("kdjfkd.txt", "hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file renamed");
// });

// const p = "/home/jenish/Videos/node-class/hello.txt";
// const path = require("path");

// console.log(path.dirname(p));
// console.log(path.extname(p));

// fs.copyFile("hello.txt", "dir/copied_file.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file copied!");
// });

const { prototype } = require('events');
const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/login') {
    res.write("<html><head><title>Node JS Class</title></head><body>");
    res.write("<h1>Hello Login!></h1>");
    res.write("</body></html>");
  }
  else {
    const data = fs.readFileSync("index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
    console.log(data);
    res.write(data);
  }
  res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port, host, ()=>{
  console.log(`Server is listening on http://${host}:${port}`);
})
