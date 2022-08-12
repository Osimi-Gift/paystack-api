const Pay = require('../models/payments');
const request = require('request'); //must come before the paystack wrapper
const { initPay, verifyPay } = require('../config/paystack')(request);
const _ = require('lodash');

exports.getForm = (req, res) => {
   res.render('index.ejs');
};


exports.postForm = (req, res) => {
   const form = _.pick(req.body, ['full_name', 'email', 'amount']);
   form.metadata = {
      full_name: form.full_name
   }
   form.amount *= 100;

   initPay(form, (error, body) => {
      if (error) {
         console.log(error);
         return res.status(400).redirect('/error')
      }
      const response = JSON.parse(body);
      authorization = response.data.authorization_url; // typeerror issue fix
      res.status(200).redirect(authorization) // (response.data.authorization_url);
      console.log(response) // why on earth is heroku bitchy...
   });
};


exports.callback = (req, res) => {
   const ref = req.query.reference;
   verifyPay(ref, (error, body) => {
      if (error) {
         console.log(error)
         return res.status(400).redirect('/error');
      }
      response = JSON.parse(body);

      const data = _.at(response.data, ['reference', 'amount', 'customer.email', 'metadata.full_name']);
      [reference, amount, email, full_name] = data;
      newPay = { reference, amount, email, full_name }


      const pay = new Pay(newPay)
      pay.save().then((pay) => {
         if (!pay) {
            return res.status(400).redirect('/error');
         }
         res.redirect('/receipt/' + pay._id);
      }).catch((error) => {
         console.log(error)
         res.redirect('/error');
      });
   });
};


exports.receipt = (req, res) => {
   const id = req.params.id;
   Pay.findById(id).then((pay) => {
      if (!pay) {
         res.status(400).redirect('/error')
      }
      res.render('success.ejs', { pay });
   }).catch((error) => {
      console.log(error)
      res.status.redirect('/error')
   });
};


exports.error = (req, res) => {
   res.render('error.ejs')
};
