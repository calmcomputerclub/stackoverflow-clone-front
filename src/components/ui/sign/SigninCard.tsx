import Input from "@components/base/Input";

const SigninCard = () => {
  return (
    <div className="p-4">
      <form className="flex flex-col gap-4" onSubmit={async () => {}}>
        <label>
          <span>Username</span>
          <Input />
        </label>
      </form>
    </div>
  );
};

export default SigninCard;
