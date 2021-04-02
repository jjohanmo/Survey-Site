/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 File name:authMiddleware.js
 group:4
 */
 const jwt = require('jsonwebtoken');
 const APP_SECRET = 'Secret';
 const USERNAME = 'admin';
 const PASSWORD = '123456';
 
const mappings =
{
  get: ['/api/surveyOne', '/surveyOne'],
  post: ['/api/surveyOne', '/book-list', 'api/categories', '/categories'],
  get: ['/api/surveyTwo', '/surveyTwo'],
  post: ['/api/surveyTwo', '/book-list', 'api/categories', '/categories'],
  get: ['/api/surveyThree', '/surveyThree'],
  post: ['/api/surveyThree', '/book-list', 'api/categories', '/categories']
}
function requiresAuth(method, url)
{
  return (mappings[method.toLowerCase()] || [])
  .find(p=> url.startsWith(p)) !== undefined;
}

module.exports = function (req, res, next)
{
  if (req.url.endsWith("/login") && req.method == "POST")
  {
    if (req.body && req.body.name == USERNAME && req.body.password == PASSWORD)
    {
      let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
      res.json({ success: true, token: token });
    }
    else
    {
      res.json({ success: false });
    }
    res.end();
    return;
  }
  else if (requiresAuth(req.method, req.url))
  {
    let token = req.headers["authorization"] || "";
    if (token.startsWith("Bearer<"))
    {
      token = token.substring(7, token.length - 1);
      try
      {
        jwt.verify(token, APP_SECRET);
        next();
        return;
      }
      catch (err)
      { }
    }
    res.statusCode = 401;
    res.end();
    return;
  }
  next();
}
