const express = require('express');
const router = express.Router();
const rideService = require('./ride.service');

const createRide = (req, res, next) => {
  rideService.createRide(req.body)
    .then(() => res.status(201).send(req.body))
    .catch(err => next(err));
};

const getAllCars = (req, res, next) => {
  rideService.getAllRides()
    .then(rides => res.json(rides))
    .catch(err => next(err));
};

const getRideDetails = (req, res, next) => {
  rideService.getRideDetails(req.params.id)
    .then(ride => res.json(ride))
    .catch(err => next(err));
}

// routes customers
router.post('/create', createRide);
router.get('/', getAllCars);
router.get('/:id/detail', getRideDetails);

module.exports = router;
