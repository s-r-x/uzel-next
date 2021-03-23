import { FormEventHandler, useRef } from "react";
import * as S from "./styled";
import { Button } from "_c/Button";
import { Requests } from "@/network/requests";
import { CreateCommentMutationVariables } from "@/typings/wp";
import { useMutation } from "react-query";

type TProps = {
  postId: number;
};
export default function CommentForm(props: TProps) {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const msgRef = useRef<HTMLTextAreaElement>();
  const mutation = useMutation((data: CreateCommentMutationVariables) =>
    Requests.createComment(data)
  );
  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    mutation.mutate({
      postId: props.postId,
      email: emailRef.current.value,
      name: nameRef.current.value,
      comment: msgRef.current.value,
    });
  };
  return (
    <S.Container onSubmit={onSubmit}>
      <S.FieldContainer>
        <label htmlFor="comment-form_message">Комментарий</label>
        <textarea ref={msgRef} rows={4} id="comment-form_message" required />
      </S.FieldContainer>
      <S.FieldContainer>
        <label htmlFor="comment-form_name">Имя</label>
        <input ref={nameRef} id="comment-form_name" required />
      </S.FieldContainer>
      <S.FieldContainer>
        <label htmlFor="comment-form_email">Email</label>
        <input ref={emailRef} id="comment-form_email" type="email" required />
      </S.FieldContainer>
      {mutation.isError && <div>Ошибка</div>}
      {mutation.isSuccess && <div>Спасибо за комментарий</div>}
      <Button disabled={mutation.isLoading} type="submit">
        Отправить
      </Button>
    </S.Container>
  );
}
