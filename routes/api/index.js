const router = require("express").Router();
const bookRoutes = require("./books");
// const varRoutes= require("./john");

// Book routes
router.use("/books", bookRoutes);
//router.use("/books/", varRoutes);

module.exports = router;
