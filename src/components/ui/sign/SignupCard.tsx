import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useUserStore } from "src/store/userStore";
import Button from "../../base/Button";
import { postSignup } from "./signup";

const defaultInput = {
  username: "",
  password: "",
};

const SignupCard = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const [userInput, setUserInput] = useState(defaultInput);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const res = await postSignup(userInput);

          if (res && res.data) setUser(res.data);
          setUserInput(defaultInput);
          router.replace("/");
        } catch (error) {
          console.error(error);
        }
      }}
      className="sm-shadow flex flex-col p-4 gap-4 bg-white rounded"
    >
      <label>
        <span className="font-semibold">Username</span>
        <input
          name="username"
          value={userInput.username}
          onChange={handleChange}
          className="w-full mt-2 p-1 rounded appearance-none bg-white border border-gray-400"
          type="text"
        />
      </label>
      <label>
        <span className="font-semibold">Password</span>
        <input
          value={userInput.password}
          onChange={handleChange}
          name="password"
          className="w-full mt-2 p-1 rounded appearance-none border border-gray-400"
          type="password"
        />
      </label>
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignupCard;
