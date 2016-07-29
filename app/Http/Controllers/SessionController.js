'use strict';

class SessionController {

  * index(request, response) {

  }

  * create(request, response) {
    yield response.sendView('session.create');
  }
}

module.exports = SessionController
