const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_URL: process.env.MONGODB_URI || process.env.MONGODB_URL,
    MONGODB_USERNAME: process.env.MONGODB_USERNAME,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
   
};

