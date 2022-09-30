import Link from "next/link";
import { useQuestionsQuery } from "./question-query";

const QuestionList = () => {
  const questionQuery = useQuestionsQuery();

  if (questionQuery.isLoading || !questionQuery.isSuccess) return null;
  if (questionQuery.data.length === 0) return <p>empty</p>;

  return (
    <ul className="px-6 pt-4 border-t border-t-gray-300">
      {questionQuery.data.map((q) => (
        <QuestionSummary
          id={q.id}
          key={q.title}
          title={q.title}
          tags={q.tags}
        />
      ))}
    </ul>
  );
};

export default QuestionList;

interface QuestionSummaryProps {
  id: number;
  title: string;
  tags: string[];
}
const QuestionSummary = ({ title, tags, id }: QuestionSummaryProps) => {
  return (
    <li className="flex flex-col gap-1">
      <Link href={`/questions/${id}`}>
        <div className="text-blue-600 text-md">{title}</div>
      </Link>
      <div className="flex flex-wrap gap-1">
        {tags.length > 0 &&
          tags.map((t) => (
            <span
              className="p-1 text-xs rounded-sm bg-powder-100 text-powder-700"
              key={t}
            >
              {t}
            </span>
          ))}
      </div>
    </li>
  );
};
