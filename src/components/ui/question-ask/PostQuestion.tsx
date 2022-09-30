import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../base/Button";
import Input from "../../base/Input";
import ShadowDiv from "../../base/ShadowDiv";
import Textarea from "../../base/Textarea";
import { useQuestionMutation } from "./mutation";
import Tags from "./Tags";

const PostQuestion = () => {
  const router = useRouter();
  const quertClient = useQueryClient();
  const mutation = useQuestionMutation();
  const [tags, setTags] = useState<string[]>([]);
  return (
    <Formik<{
      title: string;
      content: string;
    }>
      initialValues={{
        title: "",
        content: "",
      }}
      validate={(values) => {
        const errors: Record<string, string> = {};
        if (!values.title) {
          errors.title = "Title is missing.";
        }

        if (!values.content) {
          errors.content = "Body is missing.";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        mutation.mutate(
          {
            tags,
            ...values,
          },
          {
            onSuccess: (data) => {
              resetForm();
              alert("Success!");
              router.replace(`/questions/${data.id}`);
            },
          }
        );
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <ShadowDiv className="flex flex-col gap-4 p-4 bg-white">
            <label className="flex flex-col gap-1">
              <span className="font-bold text-md">Title</span>
              <span className="text-xs">
                Be specific and imagine you’re asking a question to another
                person
              </span>
              <Input
                value={values.title}
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && (
                <span className="text-xs text-red-600">{errors.title}</span>
              )}
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-bold text-md">Body</span>
              <span className="text-xs">
                Include all the information someone would need to answer your
                question
              </span>
              <Textarea
                rows={15}
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.content && (
                <span className="text-xs text-red-600">{errors.content}</span>
              )}
            </label>
            <div className="flex flex-col gap-1 select-text">
              <span className="font-bold text-md">Tags</span>
              <span className="text-xs">
                Add up to 5 tags to describe what your question is about
              </span>
              <Tags tags={tags} setTags={setTags} />
            </div>
          </ShadowDiv>
          <div className="mt-8">
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                errors.title !== undefined ||
                errors.content !== undefined
              }
            >
              Review your question
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default PostQuestion;
