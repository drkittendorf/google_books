const path = require("path");
const router = require("express").Router();
const BookRoutes = require("./api/books");
const GbookRoutes = require("./api/gbooks");

// API Routes
router.use('/api/Books', BookRoutes);
router.use('/api/Gbooks', GbookRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;