const http = require('http');
const fs = require('fs');
const markdown = require( "markdown" ).markdown;
const open = require("open");


            
const server = http.createServer((req, res) => {
  fs.readFile('./hello.md',(err, data)=>{
    if(err){
        res.statusCode = 500;
        console.log('something error!');
    }else{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;charset=UTF-8');
        let abc = data.toString();
        const alert = `<script>window.print()</script>`;
        const css = 
          `<style>
              pre{
                font-size: 20px;
                font-family: "微軟正黑體";
              }
          </style>`;
        let show = markdown.toHTML(abc)
        res.end(css+show+alert);
    }
  });
});

server.listen(3000, '127.0.0.1', () => {
  open('http://127.0.0.1:3000/', 'chrome');
});
