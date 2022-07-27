//require('dotenv').config();
//console.log(process.env);

const paystack = (request) => {
   const secretKey = 'Bearer sk_test_YOUR SECRET KEY';

   const initPay = (form, callbacks) => {
      const options = {
         url: 'https://api.paystack.co/transaction/initialize',
         headers: {
            authorization: secretKey,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
         }, form
      }

      let callback = (error, response, body) => {
         return callbacks(error, body)
      }
      request.post(options, callback)
   }

   const verifyPay = (ref, callbacks) => {
      const options = {
         url: 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
         headers: {
            authorization: secretKey,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
         }
      }
      let callback = (error, response, body) => {
         return callbacks(error, body) //same...
      }
      request(options, callback)
   }
   return { initPay, verifyPay };
}

module.exports = paystack;