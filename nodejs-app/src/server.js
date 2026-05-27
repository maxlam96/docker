import http from 'node:http';

const port = Number(process.env.PORT || 3000);

const sendJson = (res, statusCode, payload) => {
  const body = JSON.stringify(payload);

  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff'
  });

  res.end(body);
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    sendJson(res, 200, {
      message: 'Hello from Node.js Docker test app',
      status: 'ok'
    });
    return;
  }

  if (req.method === 'GET' && req.url === '/health') {
    sendJson(res, 200, { status: 'healthy' });
    return;
  }

  sendJson(res, 404, { error: 'not_found' });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
