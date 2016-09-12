'use strict';
const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {
    const { username, email, password } = request.all();

    try {
      yield User.create({ email, password: yield Hash.make(password), username });

      yield request.with({ success: 'User created!' })

     .flash();


      response.redirect('/login');
    } catch (e) {

      yield request.withAll()

     .andWith({ error: 'The user could not be created!' })

     .flash();


      response.redirect('back');
    }
  }


}

module.exports = UserController;
