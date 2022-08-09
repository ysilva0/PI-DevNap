function auth(req, res, next) {
    const userIslogged = Boolean(req.session.user) || Boolean(req.user)
  
    if(userIslogged) {
      return next();
    }
  
    return res.render('login')
  }
  
  module.exports = auth;