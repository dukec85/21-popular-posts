'use strict';
const User = use('App/Model/User');
const Hash = use('Hash');
class UserController {

  * index(request, response) {

  }

  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {
    const { username, email, password } = request.all();

    try {
      yield User.create({ email, password: yield Hash.make(password) });
    } catch (e) {

    }
  }

  * show(request, response) {

  }

  * edit(request, response) {

  }

  * update(request, response) {

  }

  * destroy(request, response) {

  }

}

module.exports = UserController;
