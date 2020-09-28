const Promise = require('bluebird');
const {getAllDriversQuery} = require('../commons/queries');
const {createDriverQuery} = require('../commons/queries');
const {createCustomerQuery} = require('../commons/queries');
const {getAllCustomersQuery} = require('../commons/queries');
const {deleteCustomerByIdQuery, updateCustomerByIdQuery} = require('../commons/queries');
const {deleteDriverByIdQuery, updateDriverByIdQuery} = require('../commons/queries');
const {pool} = require('../config/config');

const getAllCustomers = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			getAllCustomersQuery,
			(error, results) => {
			if (error) {
				reject(error);
			}
			resolve(results.rows);
		});
	});
};

const createCustomer = async (userParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			createCustomerQuery,
			[
				userParam.customer_id,
				userParam.firstname,
				userParam.lastname,
				userParam.email,
				userParam.phone,
				userParam.username
			],
			(error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(userParam);
				}
		});
	});
};

const createDriver = async (userParam) => {
	return new Promise((resolve, reject) => {
		pool.query(
			createDriverQuery,
			[
				userParam.driver_id,
				userParam.firstname,
				userParam.lastname,
				userParam.age,
				userParam.phone,
				userParam.username
			],
			(error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(userParam);
				}
			});
	});
};

const getAllDrivers = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			getAllDriversQuery,
			(error, results) => {
			if (error) {
				reject(error);
			}
			resolve(results.rows);
		});
	});
};

// =============================

// Delete a customer by id
const deleteCustomerById = async (customerId) => {
 return new Promise((resolve, reject) => {
  pool.query(
   deleteCustomerByIdQuery,
   [
    customerId
   ],
   (error, results) => {
    if (error) {
     reject(error);
    }
    resolve(customerId);
   });
 });
};

// Update a customer by its id
const updateCustomerById = async (customerId, data) => {
 return new Promise((resolve, reject) => {
  pool.query(
   updateCustomerByIdQuery,
   [
    data.customer_id,
    data.firstname,
    data.lastname,
    data.username,
    data.email,
    data.phone,
    customerId
   ],
   (error, results) => {
    if (error) {
     reject(error);
    }
    resolve(customerId);
   }
  );
 })
}


// Delete a driver by id
const deleteDriverById = async (driverId) => {
 return new Promise((resolve, reject) => {
  pool.query(
   deleteDriverByIdQuery,
   [
    driverId
   ],
   (error, results) => {
    if (error) {
     reject(error);
    }
    resolve(driverId);
   });
 });
};


// Update a driver by its id
const updateDriverById = async (driverId, data) => {
 return new Promise((resolve, reject) => {
  pool.query(
   updateDriverByIdQuery,
   [
    data.driver_id,
    data.firstname,
    data.lastname,
    data.age,
    data.username,
    data.phone,
    driverId
   ],
   (error, results) => {
    if (error) {
     reject(error);
    }
    resolve(driverId);
   }
  );
 })
}


module.exports = {
	getAllDrivers,
	getAllCustomers,
	createCustomer,
 createDriver,
 deleteCustomerById,
 updateCustomerById,


 deleteDriverById,
 updateDriverById
};
