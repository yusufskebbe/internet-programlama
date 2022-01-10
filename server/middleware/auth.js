const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
   try {
      // getting the token from the frontend
      const token = req.headers.authorization.split(" ")[1];



      let decodedData
      if (token) {
         decodedData = jwt.verify(token, 'test')

         req.userId = decodedData?.id
      }
      console.log(token)

      next();

   } catch (error) {
      console.log(error);
   }
}

module.exports = auth