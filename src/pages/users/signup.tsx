import type { ReactElement } from "react";
import SignupCard from "@components/ui/sign/SignupCard";

const SignupPage = () => {
  return (
    <div className="flex gap-4">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold">
          Join the Stack Overflow community
        </h1>
      </div>
      <SignupCard />
    </div>
  );
};

SignupPage.getLayout = (page: ReactElement) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      {page}
    </div>
  );
};

export default SignupPage;
