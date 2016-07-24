// Generated by CoffeeScript 1.10.0
(function() {
  var Router;

  Router = (function() {
    function Router(app) {
      app.get(/.*/, (function(_this) {
        return function(req, res, next) {
          var path;
          path = req.path.slice(1);
          path = path || 'index';
          if (/^static/.test(path)) {
            return next();
          } else {
            return res.render(path);
          }
        };
      })(this));
      app.post('', (function(_this) {
        return function(req, res) {
          return res.render('index');
        };
      })(this));
      app.post('/search', (function(_this) {
        return function(req, res) {
          return res.render('index');
        };
      })(this));
      app.post('/login', (function(_this) {
        return function(req, res) {
          return res.render('login');
        };
      })(this));
      app.post('/restore', (function(_this) {
        return function(req, res) {
          return res.render('login');
        };
      })(this));
      app.post('/register', (function(_this) {
        return function(req, res) {
          return res.render('register');
        };
      })(this));
    }

    return Router;

  })();

  module.exports = Router;

}).call(this);

//# sourceMappingURL=router.js.map
