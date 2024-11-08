// services/authService.ts
import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (inputPassword: string, storedPassword: string) => {
  return bcrypt.compare(inputPassword, storedPassword);
};
