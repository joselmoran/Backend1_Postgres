const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');


const createCustomer = (req, res, next) => {
	userService.createCustomer(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAllCustomers = (req, res, next) => {
	userService.getAllCustomers()
		.then(users => res.json(users))
		.catch(err => next(err));
};

const createDriver = (req, res, next) => {
	userService.createDriver(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAllDrivers = (req, res, next) => {
	userService.getAllDrivers()
		.then(users => res.json(users))
		.catch(err => next(err));
};


// Delete a customer by Id.
const deleteCustomerById = (req, res, next) => {
 userService.deleteCustomerById(req.params.customerId)
  .then(() => res.status(200).json(req.params.customerId))
  .catch(err => next(err));
}

// Update a customer by Id.
const updateCustomerById = (req, res, next) => {
 userService.updateCustomerById( req.params.customerId, req.body)
  .then(() => res.status(200).json(req.params.customerId))
  .catch(err => next(err));
}


// Delete a Driver by Id.
const deleteDriverById = (req, res, next) => {
 userService.deleteDriverById(req.params.driverId)
  .then(() => res.status(200).json(req.params.driverId))
  .catch(err => next(err))
}

// Update a driver by Id.
const updateDriverById = (req, res, next) => {
 userService.updateDriverById( req.params.driverId, req.body)
  .then(() => res.status(200).json(req.params.driverId))
  .catch(err => next(err));
}

// Get JWT token
const getJWTToken = (req, res, next) => {
 const jwtToken = jwt.sign(
  { sub:
      {
        status: true
      }
  }
  , config.secret,
  {expiresIn: '3d', algorithm: 'HS512'});

 res.status(200).json({
  token: jwtToken
 });
}
// /api/v1/users/drivers

// routes driver
router.post('/drivers/create', createDriver);
router.get('/drivers', getAllDrivers);
router.delete('/drivers/:driverId/delete', deleteDriverById);
router.put('/drivers/:driverId/update', updateDriverById);


// routes customers
router.post('/customers/create', createCustomer);
router.get('/customers', getAllCustomers);
router.delete('/customers/:customerId/delete', deleteCustomerById);
router.put('/customers/:customerId/update', updateCustomerById);

router.get('/authenticate', getJWTToken);
// api/v1/users/authenticate 

module.exports = router;
