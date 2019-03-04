

const helloHandler = (res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ type: "hello", message: "hello world" }));
}

const rootHandler = (res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome !");
}

const routeMap = {
    hello: helloHandler,
    root: rootHandler
}

const router = (path) => {
    if (path === '') {
        return routeMap.root;
    }

    return routeMap[path.toLowerCase()];
}

module.exports = router;