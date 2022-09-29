import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../../config/env";

type QuestionInput = {
  title: string;
  content: string;
};

export const postQuestion = async (questionInput: QuestionInput) => {
  const { data } = await axios.post(`${BASE_URL}/post`, questionInput);
  return data;
};

export const useQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postQuestion, {
    onSuccess: (data) => {
      queryClient.setQueryData(["question", data.id], data);
    },
  });
};
