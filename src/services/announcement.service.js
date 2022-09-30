const Announcements = require('../model/announcement.model')

async function getAnnouncements(req, res) {
    var found = await Announcements.find({}).populate({path: "creatorId", select: ("_id")}).populate({ path: "collaborator", select: ("profilePicPath") })
    if (found) {
        res.json(found)
    }
    else {
        res.json('error')
    }
}

async function createAnnouncement(req, res)
  {
    var body =  req.body
  
    Announcements.create({
    title: body.title,
    startDate: body.startDate,
    endDate:  body.endDate,
    location: body.location,
    note: body.note,
    announcementType: body.announcementType,
    creatorId: body.creatorId,
    collaborator: body.collaborator
  })
  res.json('announcement created!')
}


async function deleteAnnounceByID(req, res){
  var id = req.query._id
  console.log('announcement id ========='+ id)
  var result= await Announcements.findByIdAndDelete( id )

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

async function updateAnnounceByID(req, res){
  console.log("updated func is called")
  var _id = req.query._id
  var body = req.body;
  var result = await Announcements.findOneAndUpdate({_id: _id}, body, {new: true});
  res.json(result);
}


async function findAnnouncebyId(req, res){
  console.log("findById called")
  var id = req.query._id
  var result = await Announcements.findById( id ).populate({ path: "collaborator", select: ("profilePicPath") })
  res.json(result);
}


module.exports = {
    getAnnouncements,
    createAnnouncement,
    deleteAnnounceByID,
    updateAnnounceByID,
    findAnnouncebyId
}