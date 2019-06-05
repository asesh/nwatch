var randomEmail = require('random-email');
var querystring = require('querystring');

module.exports = {

  // before(browser) {
  //   var myPageObject = browser.page.MyPage();
  //   browser.maximizeWindow();
  // },

  'Demo' : function (browser) {

    const numberOfWorkers = 100
    const password = "K@thmandu09+"

    // Generate 100 random email addresses
    var emailAddresses = new Array(numberOfWorkers)
    for(emailCounter = 0; emailCounter < 100; emailCounter++) {
      emailAddresses[emailCounter] = randomEmail({ domain: 'cloudfactory.com' });
      console.log(emailAddresses[emailCounter])
    }

    var countries = ["Nepal", "Kenya"]

    const numberOfInvitedUsers = (2 * numberOfWorkers) / 100 // 2% users should be invited

    const endpoint = "https://fishtail.cloudfactorypre.app/auth"

    const defaultTimeout = 60000

    browser
      .url(endpoint)
      .waitForElementVisible('.btn-primary.m-5', defaultTimeout)
      //.waitForElementPresent({selector: ".btn btn-primary p-20 m-5 float-right", time: 60000})
      .click(".btn-primary")
      .pause(defaultTimeout)
      // ...
      //.end();
      //.pause(10000);
  },

  after(browser, done) {
    browser.end(() => {
      done();
    });
  }
};