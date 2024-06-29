const cpuRoute = require("./data/cpus.json");
const gpuRoute = require("./data/gpus.json");
const ramRoute = require("./data/rams.json");
const storageRoute = require("./data/storages.json");
const motherboardRoute = require("./data/motherboards.json");
const coolingRoute = require("./data/cooling.json");
const setupRoute = require("./data/setups.json");

const jsonServer = require("json-server");
const cors = require("cors");

const routes = {
  cpu: cpuRoute,
  gpu: gpuRoute,
  ram: ramRoute,
  storage: storageRoute,
  motherboard: motherboardRoute,
  cooling: coolingRoute,
  setup: setupRoute,
};

const server = jsonServer.create();
const router = jsonServer.router(routes);
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);
server.listen(3000, () => console.log("🖥️ - Servidor aberto!"));
