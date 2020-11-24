var owners = [{
        id: 1,
        name: "Adam",
        pets: [{
                id: 1,
                name: "Vera",
                type: "Dog"
            },
            {
                id: 2,
                name: "Felix",
                type: "Cat"
            }
        ]
    },
    {
        id: 2,
        name: "Kamilah",
        pets: [{
            id: 1,
            name: "Doug",
            type: "Dog"
        }]
    }
];

var primaryId = 1;

// GET /api/owners
exports.findAll = (req, res) => {
    if (!owners.length) {
        next();
    }
    res.send(owners);
};

// GET /api/owners/:id
exports.findOne = (req, res) => {
    const id = req.params.id;
    let owner = owners.find((o) => {
        return o.id === Number(id)
    });

    const filter = req.body.filter || [];
    if (filter.length) {
        let newOwner = {};
        filter.forEach((f) => {
            newOwner[f] = owner[f];
        })
        res.status(200).send(newOwner);
    }
    res.status(200).send(owner);
};

// POST /api/owners
exports.create = (req, res) => {
    owners.push({
        id: primaryId,
        name: req.body.name,
        pets: req.body.pets
    });
    primaryId++;

    res.status(200).json({
        message: "Owner and pet created succesfully"
    })
};

// PUT /api/owners/:id
exports.update = (req, res) => {
    return;
};

// DELETE /api/owners/:id
exports.delete = (req, res) => {
    return;
};

// GET /api/owners/:id/pets
exports.allPets = (req, res) => {
    return;
}

// GET /api/owners/:id/pets/:petId
exports.onePet = (req, res) => {
    return;
}

// POST /api/owners/:id/pets
exports.newPet = (req, res) => {
    return;
}

// PUT /api/owners/:id/pets/:petId
exports.updatePet = (req, res) => {
    return;
}

// DELETE /api/owners/:id/pets/:petId
exports.deletePet = (req, res) => {
    return;
}