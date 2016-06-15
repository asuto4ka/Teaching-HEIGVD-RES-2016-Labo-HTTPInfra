docker build -t res/static ./static
docker build -t res/dynamic ./dynamic
docker build -t res/reverse_proxy ./apache-reverse-proxy

docker run -d res/static
docker run -d res/dynamic
docker run -d -p 8080:80 res/reverse_proxy

PAUSE