"use strict";

const { UserNotFoundException, PasswordMisMatchException } = use(
  "@adonisjs/auth/src/Exceptions"
);
const Hash = use("Hash");
const User = use("App/Models/User");

class AuthController {
  async login({ request, auth }) {
    console.log(auth);
    const { email, password } = request.only(["email", "password"]);
    const id = await User.query()
      .where("email", email)
      .pluck("id")
      .first();
    const user = await User.find(id.id);
    if (user) {
      const isSame = await Hash.verify(password, user.password);
      if (isSame) {
        return auth.generate(user);
      } else {
        throw new PasswordMisMatchException();
      }
    } else {
      throw new UserNotFoundException();
    }
  }

  async logout({ auth }) {
    const check = await auth.check();
    if (check) {
      await auth.user
        .tokens()
        .where("type", "jwt_refresh_token")
        .update({ is_revoked: true });
    }
  }
}

module.exports = AuthController;
