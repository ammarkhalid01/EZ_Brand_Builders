const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://aliytofficial102:8SQLangsgqPTk6Ww@cluster0.iystjsu.mongodb.net/');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    email: String,
    phone: String,
    service: String,
    message: String
});

const userSchema1 = new mongoose.Schema({
    Fname: String,
    Lname: String,
    email: String,
    phone: String,
    contacts: String,
    service: String,
    service2: String,
    message: String
});

const User = mongoose.model('User', userSchema);
const User1 = mongoose.model('User1', userSchema1);




const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/demo',async (req,res)=>{
     
    let user = new User();
    user.Fname = req.body.Fname;
    user.Lname = req.body.Lname;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.service = req.body.service;
    user.message = req.body.message;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/demo',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})



server.post('/home',async (req,res)=>{
     
    let user1 = new User1();
    user1.Fname = req.body.Fname;
    user1.Lname = req.body.Lname;
    user1.email = req.body.email;
    user1.phone = req.body.phone;
    user1.contacts = req.body.contact;
    user1.service = req.body.service;
    user1.service2 = req.body.service2;
    user1.message = req.body.message;
    const doc = await user1.save();

    console.log(doc);
    res.json(doc);
})

server.get('/home',async (req,res)=>{
    const docs = await User1.find({});
    res.json(docs)
})

server.listen(8080,()=>{
    console.log('server started')
})