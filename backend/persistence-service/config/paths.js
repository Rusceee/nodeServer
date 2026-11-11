const path = require("path");

// Directory ROOT del servizio
const ROOT = path.join(__dirname, "..");
const FRONTEND_PUBLIC = path.join(ROOT, "..", "..", "frontend", "public");

// Percorsi principali
module.exports = {
    ROOT,
    SRC: path.join(ROOT, "src"),
    PUBLIC: FRONTEND_PUBLIC,
    IMAGES: path.join(ROOT, "images"),
    ROUTES: path.join(ROOT, "src", "routes"),
    CONTROLLERS: path.join(ROOT, "src", "controllers")
};

