'use strict';

const View = use('View');

class IsUserLoggedIn {

  * handle(request, response, next) {
    const user = yield request.auth.getUser();
    View.global('currentUser', user);
    yield next;
  }

}

module.exports = IsUserLoggedIn;
