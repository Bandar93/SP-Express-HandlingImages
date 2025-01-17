const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models/User")
const bcrypt = require("bcrypt")

exports.localStrategy = new LocalStrategy( async (username, password, done) => {
console.log(username)
console.log(password)
try {
    const user = await User.findOne({username: username });
    const passwordsMatch = user
  ? await bcrypt.compare(password, user.password)
  : false;

  if (passwordsMatch) {
    return done(null, user);
  }
  return done(null, false);
      

} catch (error){
    done(error)
}
})