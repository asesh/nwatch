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

    const endpoint = "https://fishtail.cloudfactorypre.app/core/people"

    // request.post(
    //   endpoint,
    //   { json: { key: 'value' } },
    //   function (error, response, body) {
    //       if (!error && response.statusCode == 200) {
    //           console.log(body);
    //       }
    //   }
    // );
    browser
      .url(endpoint)
      .expect.element('#main').to.be.present()
      .click(".btn-primary")
      .pause(100000)
      // ...
      //.end();
      //.pause(10000);
  },

  after(browser, done) {
    browser.end(() => {
      console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
      console.info('*-- Clossing session... Good bye! --*');
      console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
      done();
    });
  }
};