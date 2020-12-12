export const checkEmail = (email) => {
  const emailRegex = /^[a-z][a-z0-9]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
  return email.match(emailRegex);
};

export const checkPassword = (password) => {
  return password.length > 6;
};

export const checkConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};
