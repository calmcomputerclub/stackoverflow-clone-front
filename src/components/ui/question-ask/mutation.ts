import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../../../lib/axios";
import { Question } from "../question/query";

type QuestionInput = {
  title: string;
  content: string;
  tags: string[];
};

export const postQuestion = async (questionInput: QuestionInput) => {
  const { data } = await client.post<Question>("/post", questionInput);
  return data;
};

export const useQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postQuestion, {
    onSuccess: (data) => {
      queryClient.setQueryData(["question", data.id.toString()], data);
    },
  });
};
