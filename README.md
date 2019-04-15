## Run

```
docker-compose up -d nginx
```

### Usage

```
curl http://0.0.0.0:8000/
```

```
wrk -c 100 -t 8 http://localhost:8000/
```
