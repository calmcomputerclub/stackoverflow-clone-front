import { useQuestionQuery } from "./query";

interface QuestionProps {
  id: string;
}

const Question = ({ id }: QuestionProps) => {
  const questionQuery = useQuestionQuery(id.toString());
  if (questionQuery.isLoading || !questionQuery.isSuccess)
    return <h1>Waiting...</h1>;
  return (
    <div>
      <h1>{questionQuery.data.title}</h1>
      <p>{questionQuery.data.content}</p>
    </div>
  );
};

export default Question;
