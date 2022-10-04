import client from "@lib/axios";

type SignupInput = {
  username: string;
  password: string;
};

export async function postSignup(userInput: SignupInput) {
  const res = await client.post("/users/signup", userInput);
  return res.data;
}
