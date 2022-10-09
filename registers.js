const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }

})

const productschema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    id: {
        type: int,
        required: true,
        unique: true
    },
    price: {
        type: int,
        required: true
    },
    categery: {
        type: String,
        required: true
    }

})


const Register = new mongoose.model("Register", userschema);
const product = new mongoose.model("Register", productschema);

module.export = Register;
module.export = product;