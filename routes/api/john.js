const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

router
  .route("/envVars")
  .get(booksController.getAPI)
  //console.log("in router"));
//  app.get('/api/envVars', (req, res) => {
//    console.log("please work");
//    var envVars ={
//      apiKey: process.env.REACT_APP_API_KEY
//    }
//    console.log(json(envVars));
//    res.json(envVars);
//  })

module.exports = router;