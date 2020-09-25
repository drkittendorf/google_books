const router = require('express').Router();
const booksController = require('../../controllers/booksController');
const gbooksController = require('../../controllers/gbooksController');

// Matches with "/api/books"
router.route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  // Matches with "/api/gbooks"
router.route('/gbooks')
    .get(gbooksController.findAll)
    .post(gbooksController.create);
  
  // Matches with "/api/gbooks/:id"
router.route('/gbooks/:id')
    .get(gbooksController.findById)
    .put(gbooksController.update)
    .delete(gbooksController.remove)

    module.exports = router;