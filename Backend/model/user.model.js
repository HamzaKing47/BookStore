import mongoonse from "mongoose";

const userSchema = mongoonse.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoonse.model("User", userSchema);
export default User;
