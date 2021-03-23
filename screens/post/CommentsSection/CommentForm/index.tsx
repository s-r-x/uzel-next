import { FormEventHandler, useRef } from "react";
import * as S from "./styled";
import { Button } from "_c/Button";

export default function CommentForm() {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const msgRef = useRef<HTMLTextAreaElement>();
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    //console.log(nameRef.current.value);
    //console.log(emailRef.current.value);
    //console.log(msgRef.current.value);
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
      <Button type="submit">Отправить</Button>
    </S.Container>
  );
}
