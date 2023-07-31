// this function handles all async errors for our app as we did not use the try catch in same file to reduce complexcity

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
