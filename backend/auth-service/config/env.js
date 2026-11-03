const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = {
    client_secret: process.env.client_secret,
    client_id: process.env.client_id,
    port: process.env.port || 3001
};
