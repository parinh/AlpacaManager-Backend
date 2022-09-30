const FullQuotations = require('../model/full_quotation.model')

async function createFullQT(req, res){
    var body = req.body
    var qtNum = req.query.qtNum
    console.log(qtNum)
    FullQuotations.create({
        firstName: body.name,
        lastName: body.lastName,
        subName: body.agency,
        address: body.address,
        phone: body.phone,
        qList: body.lists,
        qtNum: qtNum,
        department: body.qNum,
        condition: body.condition,
        creditTerm: body.due,
        beforeVat: body.beforeVat,
        vat: body.vat,
        total: body.total,
        wordTotal: body.wordTotal,
        note: body.note,
        date: body.date
    })
    res.json('full quotation created')
}
module.exports ={
    createFullQT,
}
