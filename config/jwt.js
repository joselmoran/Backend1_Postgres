const expressJwt = require('express-jwt');
const config = require('./config.json');
// const userService = require('../users/user.service');

const baseApiPath = '/api/v1/users';
const algorithmHS512 = 'HS512';


const jwt = () => {
  const secret = config.secret;
  // /api/v1/users/authenticate && /api/v1/users/register && /
  return expressJwt( {
    algorithms: [algorithmHS512], secret, isRevoked
  }).unless({
    path: [
      baseApiPath + '/authenticate',
      baseApiPath + '/register',
      '/',
    ]
  });

};

const isRevoked = async (req, payload, done) =>  {
  // // const user = await userService.getByUsername(payload.sub);
  // console.log('En el jwt middleware 2');
  // const user = {
  //   status:true,
  //   id:"5ee56ff6bdb6d000127ed39f",
  //   username:"alejo8591",
  //   firstName:"Alejandro",
  //   lastName:"Romero",
  //   createdDate:"2020-06-14T00:31:50.029Z"
  // }   


  // if (!user) {
  //   return done(null, true);
  // }

  done();
};

module.exports = jwt;
