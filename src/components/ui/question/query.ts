import { useQuery } from "@tanstack/react-query";
import client from "../../../lib/axios";

export type Question = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
};

export const getQuestion = async (id: string) => {
  const { data } = await client.get<Question>(`/posts/${id}`);
  return data;
};

export const useQuestionQuery = (id: string) => {
  return useQuery(
    ["question", id.toString()],
    async () => {
      return await getQuestion(id);
    },
    {
      enabled: id !== "" || id !== undefined,
    }
  );
};
