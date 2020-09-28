const Promise = require('bluebird');
const {getAllCarsQuery} = require('../commons/queries');
const {createCarQuery} = require('../commons/queries');
const {getCarDetail} = require('../commons/queries');
const {deleteCarByIdQuery, updateCarByIdQuery} = require('../commons/queries');
const {pool} = require('../config/config');

const getAllCars = async () => {
  return new Promise((resolve, reject) => {
    pool.query(
      getAllCarsQuery,
      (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createCar = async (carParam) => {
  return new Promise((resolve, reject) => {
    pool.query(
      createCarQuery,
      [
        carParam.plate,
        carParam.model,
        carParam.motor,
        carParam.chassis,
        carParam.color
      ],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(carParam);
        }
      });
  });
};



// This route was added
const getCarDetails = async (carPlate) => {
  return new Promise((resolve, reject) => {
    pool.query(
      getCarDetail,
      [
        carPlate
      ],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
  });
};


// Delete a car by id
const deleteCarById = async (carId) => {
 console.log(carId);
 return new Promise((resolve, reject) => {
  pool.query(
   deleteCarByIdQuery,
   [
    carId
   ],
   (error, results) => {
    if (error) {
     reject(error);
    }
    console.log(results);
    resolve(carId);
   });
 });
};


// Update a car by its id
const updateCarById = async (carId, data) => {
 return new Promise((resolve, reject) => {
  pool.query(
   updateCarByIdQuery,
   [
    data.plate,
    data.model,
    data.motor,
    data.chassis,
    data.color,
    carId
   ],
   (error, results) => {
    if (error) {
     reject(error);
    }
    resolve(carId);
   }
  );
 })
}




module.exports = {
  getAllCars,
  createCar,
  getCarDetails,
  deleteCarById,
  updateCarById
};
