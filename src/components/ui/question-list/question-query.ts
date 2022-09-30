import { useQuery } from "@tanstack/react-query";
import client from "../../../lib/axios";

export type QuestionSummary = {
  title: string;
  tags: string[];
};

export const getQuestions = async () => {
  const { data } = await client.get<QuestionSummary[]>("/posts");
  return data;
};

export const useQuestionsQuery = () => {
  return useQuery(["questions"], getQuestions);
};
