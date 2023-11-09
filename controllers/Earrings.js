var Earring = require('../models/Earrings');
exports.Earring_list = async function(req, res) {
  try{
  theEarrings = await Earring.find();
  res.send(theEarrings);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };
  //VIEWS
// Handle a show all view
exports.Earrings_view_all_Page = async function(req, res) {
try{
theEarrings = await Earring.find();
res.render('Earrings', { title: ' Earrings Search Results', results: theEarrings });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle Costume create on POST.
exports.Earring_create_post = async function(req, res) {
  console.log(req.body)
  let document = new Earring();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.material = req.body.material;
  document.price= req.body.price;
  document.style = req.body.style;
  try{
  let result = await document.save();
  res.send(result);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };
  

  
/*exports.Earring_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Earrings list');
  };*/
  // for a specific Costume.
  exports.Earring_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Earrings detail: ' + req.params.id);
  };
  // Handle Costume create on POST.
  /*exports.Earring_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Earrings create POST');
  };*/
  // Handle Costume delete form on DELETE.
  exports.Earring_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Earrings delete DELETE ' + req.params.id);
  };
  // Handle Costume update form on PUT.
  exports.Earring_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Earrings update PUT' + req.params.id);
  };