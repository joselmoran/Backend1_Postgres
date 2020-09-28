const createCustomerQuery = 'INSERT INTO public.customers ' +
  '(customer_id,firstname,lastname,email,phone,username) ' +
  'VALUES($1,$2,$3,$4,$5,$6)';
const getAllCustomersQuery = 'SELECT * FROM customers ORDER BY id DESC ';

const createDriverQuery = 'INSERT INTO public.drivers ' +
  '(driver_id,firstname,lastname,age,phone,username) ' +
  'VALUES($1,$2,$3,$4,$5,$6)';
const getAllDriversQuery = 'SELECT * FROM drivers ORDER BY id DESC';

const createCarQuery = 'INSERT INTO public.cars ' +
  '(plate,model,motor,chassis,color) ' +
  'VALUES($1,$2,$3,$4,$5)';
const getAllCarsQuery = 'SELECT * FROM cars ORDER BY id DESC';

// Estas fueron los nuevos queries que se agregaron para el Exercise 32.
// Toda la sentencia SQL en mayuscula
const getCarDetailQuery = 'SELECT * FROM cars WHERE plate = $1';
const getRideDetailQuery = 'SELECT * from rides WHERE id = $1';

  

const createRideQuery = 'INSERT INTO public.rides ' +
  '(first_point,target_point,customer_id,driver_id,time) ' +
  'VALUES($1,$2,$3,$4,$5)';
const getAllRidesQuery = 'SELECT * FROM rides';

// Delete a customer by its Id
const deleteCustomerByIdQuery = 'DELETE FROM customers WHERE id = $1';
// Update a customer by its id
const updateCustomerByIdQuery = 'UPDATE customers SET  customer_id = $1, firstname = $2, lastname = $3, username = $4, email = $5, phone = $6 WHERE id = $7'


// Delete a driver by Id
const deleteDriverByIdQuery = 'DELETE FROM drivers WHERE id = $1';
// Update a driver by its id
const updateDriverByIdQuery = 'UPDATE drivers SET  driver_id = $1, firstname = $2, lastname = $3, age = $4, username = $5, phone = $6 WHERE id = $7'

// Delete a car by Id
const deleteCarByIdQuery = 'DELETE FROM cars WHERE id = $1';
// Update a car by its id
const updateCarByIdQuery = 'UPDATE cars SET plate = $1, model = $2, motor = $3, chassis = $4, color = $5 WHERE id = $6'


module.exports = {
  createCustomerQuery,
  getAllCustomersQuery,
  createDriverQuery,
  getAllDriversQuery,
  createCarQuery,
  getCarDetailQuery,
  getAllCarsQuery,
  createRideQuery,
  getAllRidesQuery,
  getRideDetailQuery,
  deleteCustomerByIdQuery,
  updateCustomerByIdQuery,
  deleteDriverByIdQuery,
  updateDriverByIdQuery,
  deleteCarByIdQuery,
  updateCarByIdQuery,
};
