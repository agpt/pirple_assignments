const http = require("http");
const url = require("url");
const router = require("./router");
const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);

    const pathName = parsedURL.path.substring(1);
    const routeHandler = router(pathName);
    if (routeHandler) {
        routeHandler(res);
    } else {
        // Not found. Since its generic error, hence kept outside of router.
        res.writeHead(404, {"content-Type": "text/plain" });
        res.end("The resource you are looking for was not found !!");
    }
});

server.listen(PORT, () => {
    global.console.log('Server running on PORT', PORT);
})