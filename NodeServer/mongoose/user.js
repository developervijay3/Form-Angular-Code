import mongoose from 'mongoose';

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    confirmEmail: String,
    password: String,
    subscription:String
}, {collection:"userlist"});

// the schema is useless so far
// we need to create a model using it
var user = mongoose.model('user', userSchema);

export default user

// Select an item from TodoList collection
// ToDo.find({item:"Gethyl"},(err,res)=>{
// 	if (err){console.log("---Gethyl not found in ToDo" + err)}
// 	else console.log("+++Gethyl fetched ==> " + res)
// })	
