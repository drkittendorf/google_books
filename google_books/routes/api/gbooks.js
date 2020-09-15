/* Add the following Express routes for your app:
/api/books (get) - Should return all saved books as JSON.

/api/books (post) - Will be used to save a new book to the database.

/api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id. */

//* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this 

//* after all other routes are defined.

// const router = require("express").Router();
// const gbooksController = require("../../controllers/gbooksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(gbooksController.findAll)
//   .post(gbooksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(gbooksController.findById)
//   .put(gbooksController.update)
//   .delete(gbooksController.remove);

// module.exports = router;