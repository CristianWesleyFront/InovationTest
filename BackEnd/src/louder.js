const server = require("./server/server");
require("./database/mongo/database");
require("./routes")(server);
