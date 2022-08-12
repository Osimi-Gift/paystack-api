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

Script error

- Fix - configure your script in your package.json file the same way you would run node/nodemon.

Failed build Mongo Atlas error

- Fix - Password field containing irrelevant characters

MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.

- ~~Fix - Wrap the uri in double quotes(make it a string)~~
- Real Fix - add them config files in your heroku config variables (annoying if you have alot of secrets to add but allows for the app to be used without having to install the packages)

- Typeerror messages

- Fix [Read this article or something similar](<https://rollbar.com/blog/javascript-typeerror-cannot-read-property-of-undefined/>)

old block of code giving typeerror with 'authorization_url'

``` javascript
const response = JSON.parse(body);
res.status(200).redirect(response.data.authorization_url);
```

New block to fix issues with heroku, works on dev environment too. Assigned the authorization_url to an authorization variable, which is used to hold the url extracted from paystack api when invoking/calling the initialize function

``` javascript
 const response = JSON.parse(body);
 authorization = response.data.authorization_url;
res.status(200).redirect(authorization);
console.log(response)
```

Tests has been done, works as intended. No server or client-side validation done (yet...), this is strictly for testing purposes and not the real thing.
