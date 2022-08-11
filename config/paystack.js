require('dotenv').config();
//console.log(process.env);

const paystack = (request) => {
   const secretKey = process.env.secretKey

   const initPay = (form, callbacks) => {
      const options = {
         url: 'https://api.paystack.co/transaction/initialize',
         headers: {
            authorization: secretKey,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
         }, form
      }

      const callback = (error, response, body) => {
         return callbacks(error, body) // stack trace points here
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
      const callback = (error, response, body) => {
         return callbacks(error, body)
      }
      request(options, callback)
   }
   return { initPay, verifyPay };
}

module.exports = paystack;