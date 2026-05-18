import bcrypt from "bcrypt";

const plainPassword = "rahul@123";
const hashedPassword = await bcrypt.hash(plainPassword, 10);

console.log("Hashed Password:", hashedPassword);