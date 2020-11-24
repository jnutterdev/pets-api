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

router.get('/:id/pets', controller.allPets);

// GET /api/owners/:id/pets/:petId

router.get('/:id/pets/:petId', controller.onePet);

// POST /api/owners/:id/pets

router.post('/:id/pets', controller.newPet);

// PUT /api/owners/:id/pets/:petId

router.put('/:id/pets/:petId', controller.updatePet);

// DELETE /api/owners/:id/pets/:petId

router.delete('/:id/pets/:petId', controller.deletePet);

module.exports = router;