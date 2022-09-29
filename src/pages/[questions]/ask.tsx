import PostQuestion from "../../components/ui/question-ask/PostQuestion";

const QuestionsAskPage = () => {
  return (
    <main className="p-4 container mx-auto">
      <h1 className="text-3xl mb-8">Ask a public question</h1>
      <PostQuestion />
    </main>
  );
};

export default QuestionsAskPage;
