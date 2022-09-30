const Vehicles = require('../model/vehicle.model')

async function getVehicle(req, res) {
    var found = await Vehicles.find({})
    if (found) {
        res.json(found)
    }
    else {
        res.json('error')
    }
}

async function createVehicle(req, res)
  {
    var body =  req.body
  
    Vehicles.create({
    vehicleType: body.vehicleType,
    transportName : body.transportName,
    distance : body.distance,
    evidence : body.evidence,
    status : body.status,
  })
  res.json('vehicle created!')
}


async function deleteVehicleByID(req, res){
  var id = req.query._id
  console.log('vehicle id ========='+ id)
  var result= await Vehicles.findByIdAndDelete( id )

  if(result){
    // res.json('delete')
    res.status(200).json('deleted!')
    console.log('deleted')
  }
  else{
    console.log('error in del func')
    res.status(400).send('error in delete')
  }
}

async function updateVehicleByID(req, res){
  console.log("updated func is called")
  var _id = req.query._id
  var body = req.body;
  var result = await Vehicles.findOneAndUpdate({_id: _id}, body, {new: true});
  res.json(result);
}

async function getVehicleById (req,res) {
  console.log("get vehicle by id")
  var id = req.query._id
  var result = await Vehicles.findById( id )
  res.json(result)
}

// async function findAnnouncebyId(req, res){
//   console.log("findById called")
//   var id = req.query._id
//   var result = await Announcements.findById( id ).populate({ path: "collaborator", select: ("profilePicPath") })
//   res.json(result);
// }


module.exports = {
    getVehicle,
    createVehicle,
    deleteVehicleByID,
    updateVehicleByID,
    getVehicleById
    // findAnnouncebyId
}