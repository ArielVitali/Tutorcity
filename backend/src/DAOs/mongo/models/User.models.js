import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    maxLength: [30, "Exceeded characters"],
    required: true,
  },
  last_name: {
    type: String,
    maxLength: [30, "Exceeded characters"],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    requied: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    maxLength: [30, "Exceeded characters"],
    trim: true,
  },
  experience: {
    type: String,
    maxLength: [150, "Experince exceeds the max chars."],
    trim: true,
  },
  profile_img_url: {
    type: String,
    default: "",
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    throw new Error("Error while hashing the password.");
  }
});

userSchema.methods.updateWithHashedPassword = async function (updateData) {
  try {
    const { password } = updateData;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    return await this.updateOne(updateData);
  } catch (error) {
    console.error(error);
    throw new Error("Error during update with hashed password.");
  }
};

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
