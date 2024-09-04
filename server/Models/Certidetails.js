const {Schema} =require('mongoose');
const { model} =require('mongoose');
const demo = new Schema({
    certiid: { type:String, required: true},
    name:    { type:String, required: true},
    course:  { type:String, required: true},
    grade:   { type:String, required: true},
    date:    { type:String, required: true}
});

const sample = model('Certidetails', demo);
module.exports=sample;