# Node.js Docker Test App

Build:

```bash
docker build -t nodejs-docker-test:local .
```

Run:

```bash
docker run --rm -p 3000:3000 nodejs-docker-test:local
```

Test:

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
```

