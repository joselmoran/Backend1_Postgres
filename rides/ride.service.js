const Promise = require('bluebird');
const {getAllRidesQuery} = require('../commons/queries');
const {createRideQuery} = require('../commons/queries');
const {getRideDetail} = require('../commons/queries');
const {pool} = require('../config/config');

const getAllRides = async () => {
  return new Promise((resolve, reject) => {
    pool.query(getAllRidesQuery, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};


const createRide = async (rideParam) => {
  return new Promise((resolve, reject) => {
    pool.query(
      createRideQuery,
      [
        JSON.stringify(rideParam.first_point),
        JSON.stringify(rideParam.target_point),
        rideParam.customer_id,
        rideParam.driver_id,
        new Date().toISOString()
      ],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(rideParam);
        }
      });
  });
};

const getRideDetails = async (rideId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      getRideDetail,
      [
        rideId
      ],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
  });
}

module.exports = {
  getAllRides,
  createRide,
  getRideDetails
};
