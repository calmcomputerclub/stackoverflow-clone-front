import Link from "next/link";
import Button from "../components/base/Button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-6xl text-red-400">Stackoverflow</h1>
      <Link href="/questions/ask">
        <Button>Ask Question</Button>
      </Link>
    </div>
  );
};

export default HomePage;
