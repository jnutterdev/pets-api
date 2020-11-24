const express = require('express');
const router = express.Router();

const controller = require('./controllers');


// GET /api/owners

router.get('/', controller.findAll);

// GET /api/owners/:id

router.get('/:id', controller.findOne);

// POST /api/owners

router.post('/', controller.create);

// PUT /api/owners/:id

router.put('/:id', controller.update);

// DELETE /api/owners/:id

router.delete('/:id', controller.delete);


// GET /api/owners/:id/pets

// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId


module.exports = router;