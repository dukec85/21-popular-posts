'use strict';

class SessionController {

  * create(request, response) {
    yield response.sendView('session.create');
  }

  * store(request, response) {

    const { username, password } = request.all();

    try {

      yield request.auth.attempt(username, password);

      yield request.with({ success: 'You are logged in!' })

        .flash();


      response.redirect('/post');
    } catch (e) {
      console.log(e);

      yield request.withAll()

      .andWith({ error: 'The username and password do not match!' })

      .flash();


      response.redirect('back');
    }
  }
  * destroy(request, response) {
    yield request.auth.logout();

    yield request
    .with({ success: 'You are logged out!' })
    .flash();

    response.redirect('/login');
  }
}

module.exports = SessionController
