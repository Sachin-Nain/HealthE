const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactformSchema = new Schema({
    firstName: {
      type: String
    },
    lastName: {
        type: String
      },
    email: {
      type: String,
    },
    feedback: {
      type: String,
    }
});

exports.Feedback = mongoose.model("Feedback",contactformSchema);