import express from 'express';

const server = express();

function getHtml() {
  return `<body>
    <div id='content'></div>
  </body>`;
}

server.get('*', getHtml);

export default server;

export function listen () {
  server.listen(8000, () => {
      console.log('Started at port 8000', process.uptime());
  });
}
