const Holidays = require('../model/holiday.model')

// TODO แก้ใหม่ได้เลย ถ้าแก้ชื่อฟังชันอย่าลืมไปแก้ในroute, frontend service
async function updateHolidayByMonth(req,res){
    let body = req.body
    if(body.start_date == body.end_date){
        let result = await Holidays.find({month: body.start_date.getmonth, year: filter.year})
    }
}

module.exports = {
    updateHolidayByMonth
}