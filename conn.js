const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/atomregistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection succesful");
}).catch((e) => {
    console.log(e);
})