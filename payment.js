import razorpay from 'razorpay'
import Express from 'express'
const paynow = Express()
var instance = new razorpay({
    key_id:"",
    key_securect:""
})
paynow.listen(3003,(req,res)=>{
    console.log("mara ripya bhej ni yrr");
})