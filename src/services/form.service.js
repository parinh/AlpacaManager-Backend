const Forms = require('../model/form.model')


async function getForm(req, res) {
    var found = await Forms.find({}).populate({path: "vehicle", select: "_id"}).populate({path: "equipment", select: "_id"}).populate({path: "creatorId", select: "_id" }).sort({ created_at: -1 })
    if (found) {
        res.json(found)
    }
    else {
        res.json('error')
    }
}

async function createForm(req, res)
  {
    var body =  req.body

    Forms.create({
    title : body.title,
    location : body.location,
    startDate : body.startDate,
    endDate : body.endDate,
    type : body.type,
    approveBy : body.approveBy,
    note : body.note,
    status : body.status,
    leaveType : body.leaveType,
    evidence: body.evidence,
    creatorId : body.creatorId,
    collaborator : body.collaborator,
    vehicle : body.vehicle,
    equipment : body.equipment,
    budget : body.budget,
    leader : body.leader,
    transaction : body.transaction,
    total : body.total,
    userEvidence : body.userEvidence,
    time : body.time,
    addTo : body.addTo,
    isRead : false,
  })
  res.json('Form created!')
}


async function deleteFormByID(req, res){
  var id = req.query._id
  console.log('Form id ========='+ id)
  var result= await Forms.findByIdAndDelete( id )

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

async function updateFormByID(req, res){
  console.log("updated func is called")
  var _id = req.query._id
  var body = req.body;
  var result = await Forms.findOneAndUpdate({_id: _id}, body, {new: true});
  res.json(result);
}


// async function findAnnouncebyId(req, res){
//   console.log("findById called")
//   var id = req.query._id
//   var result = await Announcements.findById( id ).populate({ path: "collaborator", select: ("profilePicPath") })
//   res.json(result);
// }


module.exports = {
    getForm,
    createForm,
    deleteFormByID,
    updateFormByID,
    // updateAnnounceByID,
    // findAnnouncebyId
}