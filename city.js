const city=require('../models/city.json');
exports.getcitylist=(req,res)=>{
const result=city.map(item=>item.name);
res.status(200).json({
    message: "city list loaded successfully",
    city: result
})
}