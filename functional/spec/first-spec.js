/*global describe:true, it:true */
var basedir = require('path').resolve(__dirname, '..');
var Nemo = require('C:/Users/kam/node_modules/nemo');
var nemo;

describe('suite using @generic@ nemo-view methods', function () {
  before(function (done) {
    nemo = Nemo(basedir, function (err) {
      if (err) {
        return done(err);
      }
      done();
    });
  });
  after(function (done) {
   done();
  });
  it('should automate the browser', function (done) {
    //login
    nemo.driver.get(nemo.data.baseUrl);
    nemo.view._waitVisible('id:signup-button').click();
    nemo.view._waitVisible('id:cta-btn').click();
    nemo.view._waitVisible('id:email').sendKeys('mynewpaypalaccount@geemail.paypal');
    nemo.driver.sleep(3000).then(function () {
      done();
    }, function (err) {
      done(err);
    })
  });
});