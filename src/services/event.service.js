const Events = require('../model/event.model')

async function getEvents(req, res) {
    var found = await Events.find({})
    if (found) {
        res.json(found)
    }
    else {
        res.json('error')
    }
}

async function createEvent(req, res)
  {
    var body =  req.body
    var id = req.query._id
  
    Events.create({
    title: body.title,
    detail: body.detail,
    startDate: body.startDate,
    endDate:  body.endDate,
    location: body.location,
    type: body.type,
    approval: false,
    creator_id: id,
    collaborator: body.collaborator
  })
  res.json('created!')
}

async function updateByID(req, res){
  console.log("updated func is called")
  var _id = req.query._id
  var body = req.body;
  var result = await Events.findOneAndUpdate({_id: _id}, body, {new: true});
  res.json('updatebyId result'+result);
}

async function deleteByID(req, res){
  var id = req.query._id
  console.log('ervent id ========='+ id)
  var result= await Events.findByIdAndDelete( id )

  if(result){
    // res.json('delete')
    res.status(200).json('dsds')
    console.log('deleted')
  }
  else{
    console.log('error in del func')
    res.status(400).send('error in delete')
  }
}

async function getByMonth(req, res){
  let body = req.body
  let sdate = new Date(body.startDate.getFullYear(), body.startDate.getMonth(), 1)
  let edate = new Date(body.startDate.getFullYear(), body.startDate.getMonth()+1, 0)
  console.log(sdate, edate)
  let result = await Events.find({startDate: {"$gte": sdate, "$lt": edate}})
  console.log(result)
}


module.exports = {
    getEvents,
    createEvent,
    updateByID,
    deleteByID,
    getByMonth
}