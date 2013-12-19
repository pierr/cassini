
/*
 * GET users listing.
 */

exports.list = function(req, res){
  console.log(req.param('name'));
  console.log(req.param(0));
  res.send(require('../data/'+ req.param('name')));
};