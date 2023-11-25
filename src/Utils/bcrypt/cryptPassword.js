import bcrypt from "bcrypt";

export const createHash = (password) => {
  const salt = bcrypt.genSaltSync(10); // 10 is the number of rounds
  const passwordHashed = bcrypt.hashSync(password, salt);

  return passwordHashed;
};

export const isValidPasswordMethod = (password, user) => {
  const isValid = bcrypt.compareSync(password, user.password);
  return isValid;
};
