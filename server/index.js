const express= require('express');
// console.log(express);
const app = express();
// console.log(app);
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(3000,()=>{
    console.log('server is runnig up port 3000');
})