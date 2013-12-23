
/*
 * GET users listing.
 */

exports.index = function(req, res){
  console.log(req.param('name'));
  /*Generate a fake config test.*/
  var nColor = 5;
  var configTest = {};
  for(var i =0; i<100;i++){
    configTest[''+i] = Math.floor(Math.random()*(nColor+1));
  }
  /*Real configuration.*/
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
  res.send(configTest);
};