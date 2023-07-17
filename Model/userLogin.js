const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginformSchema = new Schema({
    userName: {
      type: String
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      // validate: {
      //   validator: function (v) {
      //     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v);
      //   },
      //   message: (props) =>
      //     `${props.value} is not a valid password, It must have atleast 1 special character, number, Capital & small letter.`,
      // },
    },
  });
  
  exports.Login = mongoose.model("Login", loginformSchema);