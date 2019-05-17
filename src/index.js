const { createServer } = require("simple-socks");
const dotenv = require("dotenv");

// Load env variables from the .env file.
dotenv.config();

const server = createServer();
const port = process.env.PROXY_PORT;

// Alert the user when a user connects to the proxy.
server.on("proxyConnect", () => console.log(`connected to remote server at ${ info.host }:${ info.port }`));

server.listen(port, "0.0.0.0", () => console.log(`Server started on port ${ port }`));