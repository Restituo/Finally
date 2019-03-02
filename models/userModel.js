const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    },
    username:{
        type:String,
        unique: true
    },
    password:{
        type: String,
        bcrypt: true
    },
    email:{
        type: String,
        unique: true
    }
});
const User = mongoose.model("User",userSchema);
module.exports = User;