
/*
 * GET users listing.
 */

exports.index = function(req, res){
  console.log(req.param('name'));
  var jsonConfig = {
    name: 'Nom du paramétrage',
    draw: {
      data: "path", //Svg file stringify.
      type: 'Type of representation',
    },
    data: {
      source: 'pathToTheDataSource',
      type: 'Type of data'
    }
  };
  res.send(jsonConfig);
};