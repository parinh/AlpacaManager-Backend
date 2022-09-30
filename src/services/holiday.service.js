const Holidays = require('../model/holiday.model')

async function updateHolidayByMonth(req,res){
    let body = req.body
    if(body.start_date == body.end_date){
        let result = await Holidays.find({month: body.start_date.getmonth, year: filter.year})
    }
}

module.exports = {
    updateHolidayByMonth
}