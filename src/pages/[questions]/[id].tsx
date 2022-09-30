import { useRouter } from "next/router";
import Question from "../../components/ui/question/Question";

const QuestionDetailPage = () => {
  const router = useRouter();

  return (
    <div>
      <Question id={router.query.id as string} />
    </div>
  );
};

export default QuestionDetailPage;
