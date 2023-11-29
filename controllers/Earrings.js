const Earrings = require('../models/Earrings');
var Earring = require('../models/Earrings');
exports.Earring_list = async function (req, res) {
  try {
    theEarrings = await Earring.find();
    res.send(theEarrings);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
//VIEWS
// Handle a show all view
exports.Earrings_view_all_Page = async function (req, res) {
  try {
    theEarrings = await Earring.find();
    res.render('Earrings', { title: ' Earrings Search Results', results: theEarrings });
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle Costume create on POST.
exports.Earring_create_post = async function (req, res) {
  console.log(req.body)
  let document = new Earring();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.material = req.body.material;
  document.price = req.body.price;
  document.style = req.body.style;
  try {
    let result = await document.save();
    res.send(result);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
/*exports.Earring_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Earrings list');
  };*/
// for a specific Costume.
exports.Earring_detail = async function (req, res) {
  console.log("detail" + req.params.id)
  try {
    result = await Earring.findById(req.params.id)
    res.send(result)
  } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};
// Handle Costume create on POST.
/*exports.Earring_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Earrings create POST');
};*/
// Handle Costume delete on DELETE.
exports.Earring_delete = async function (req, res) {
  console.log("delete " + req.params.id)
  try {
    result = await Earring.findByIdAndDelete(req.params.id)
    console.log("Removed " + result)
    res.send(result)
  } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
  }
};

//Handle Costume update form on PUT.
exports.Earrings_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`)
  try {
    let toUpdate = await Earring.findById(req.params.id)
    // Do updates of properties
    if (req.body.material)
      toUpdate.material = req.body.material;
    if (req.body.price) toUpdate.price = req.body.price;
    if (req.body.style) toUpdate.style = req.body.style;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
  } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
  failed`);
  }
};

// Handle a show one view with id specified by query
exports.Earrings_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id)
  try {
    result = await Earring.findById(req.query.id)
    res.render('Earringsdetail',
      { title: 'Earrings Detail', toShow: result });
  }
  catch (err) {
    res.status(500)
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Earrings_create_Page = function(req, res) {
console.log("create view")
try{
res.render('Earringscreate', { title: 'Earrings Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a costume.
// query provides the id
exports.Earrings_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await Earring.findById(req.query.id)
  res.render('Earringsupdate', { title: 'Earrings Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };
// Handle a delete one view with id from query
  exports.Earrings_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await Earring.findById(req.query.id)
  res.render('Earringsdelete', { title: 'Earrings Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };
  