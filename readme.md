# Paystack Payment Gateway

courtesy of [frankly034](https://github.com/frankly034/online_payment) and [Stripe API Docs](https://stripe.com/docs), whose docs made it way easier to understand (and save me from a near-breakdown) whatever paystack wrote in their API docs.

CSS file has been linked, and a working example shown.

Should you want to add more styles and texts, feel free to do so by linking via public folder as you would any other stylesheet.

**Note**: Do not tamper with them ejs values unless you know what you are doing or you will break the code.

``` ejs
<%= pay.full_name %>
```

**This  is a prototype, no actual server/client validation has been done and the fixed values/amount can be set to a free one on request.**

**Should you decide to clone this, hope you know you have to use your own secret key and input the callback url in your own paystack account.**

Link to live page: [heroku](https://intense-sierra-18564.herokuapp.com/)

## Heroku debug logs

Failed build Mongo Atlas error

- Fix - Password field containing irrelevant characters

MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.

- Fix - Wrap the uri in double quotes(make it a string)
- Real Fix - add them config files in your heroku config variables (annoying if you have alot of secrets to add)
