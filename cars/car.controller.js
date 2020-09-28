const express = require('express');
const router = express.Router();
const carService = require('./car.service');

const createCar = (req, res, next) => {
  carService.createCar(req.body)
    .then(() => res.status(201).send(req.body))
    .catch(err => next(err));
};

const getAllCars = (req, res, next) => {
  carService.getAllCars()
    .then(cars => res.json(cars))
    .catch(err => next(err));
};



const getCarDetails = (req, res, next) => {
  carService.getCarDetails(req.params.plate)
    .then(cars => res.json(cars))
    .catch(err => next(err));
};

// Delete a car by Id.
const deleteCarById = (req, res, next) => {
 carService.deleteCarById(req.params.carId)
  .then(() => res.status(200).json(req.params.carId))
  .catch(err => next(err))
}

// Update a car by Id.
const updateCarById = (req, res, next) => {
 carService.updateCarById( req.params.carId, req.body)
  .then(() => res.status(200).json(req.params.carId))
  .catch(err => next(err));
}

// routes cars
router.post('/create', createCar);
router.get('/', getAllCars);
router.get('/:plate/detail', getCarDetails);

router.delete('/:carId/delete', deleteCarById);
router.put('/:carId/update', updateCarById);

module.exports = router;
