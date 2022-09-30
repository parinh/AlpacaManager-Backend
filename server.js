const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
const fileUpload = require('express-fileupload')
const serveIndex = require('serve-index')

const { Users } = require('./src/model/user.model')
const  Events = require('./src/model/event.model')
const FormNumbers = require('./src/model/formNumber.model')
const Equipments = require('./src/model/equipment.model')
const Memos = require('./src/model/memo.model')
const Items = require('./src/model/item.model');
const Statuses = require('./src/model/equipment_status.model');

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);
app.use(
  fileUpload({
    limits: {fileSize: 50*1024*1024}
  })
)

app.use('/auth', require('./src/routes/user.routes'))
app.use('/event', require('./src/routes/event.routes'))
app.use('/vehicle', require('./src/routes/vehicle.routes'))
app.use('/transaction', require('./src/routes/transaction.routes'))
app.use('/form', require('./src/routes/form.routes'))
app.use('/quotation', require('./src/routes/quotation.routes'))
app.use('/fullQuotation', require('./src/routes/fullQuotation.routes'))
app.use('/announcement', require('./src/routes/announcement.routes'))
app.use('/equipment', require('./src/routes/equipment.routes'))
app.use('/memo', require('./src/routes/memo.routes'))
app.use('/item', require('./src/routes/item.routes'))
app.use('/status', require('./src/routes/status.routes'))
app.use('/public', express.static('src/public'))
app.use('/public', serveIndex('src/public'))
app.get('/', function (req, res) {
  res.json({ message: "hihiiiiii." });
});

// async function findUsers() {

//     Users.create({
//     id: 123456,
//     firstName: 'Testhr',
//     lastName: 'number1',
//     phone: '0863991551',
//     Position: 'Hr',
//     department: 'Tech',
//     role: 'Dev',
//     username: 'testuser',
//     password:  bcrypt.hashSync('123456', 8),
//   })

//   const userfound = await Users.findOne({ Position: 'Hr' });
//   console.log(userfound)


// findUsers()




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})

async function createEvent()
  {
    Statuses.create({
      status: 'Removed',
  })
  // test = await Events.find()
  // console.log(test)
}

// createEvent()

