const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const EmployeeModel = require('./models/Employee')


const app = express()

app.use(express.json())
app.use(cors())



mongoose.connect('mongodb+srv://talhasaleem7177:talha123@cluster1.bnf5nar.mongodb.net/?retryWrites=true&w=majority')
.then(()=>
console.log("DB connected"))
.catch((err)=>
console.error(err+"DB"));

// mongoose.connect('mongodb+srv://talha:talha123@cluster0.zckdelw.mongodb.net/employee?retryWrites=true&w=majority')
// .then(()=>
// console.log("DB connected"))
// .catch((err)=>
// console.error(err+"DB"));

// api
app.post('/register',(req,res)=>{

    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))

});




app.listen(3001,()=>
{
    console.log("Port Connected")
})