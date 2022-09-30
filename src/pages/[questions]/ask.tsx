import PostQuestion from "../../components/ui/question-ask/PostQuestion";

const QuestionsAskPage = () => {
  return (
    <main className="container p-4 mx-auto">
      <h1 className="mb-8 text-3xl">Ask a public question</h1>
      <PostQuestion />
    </main>
  );
};

export default QuestionsAskPage;
