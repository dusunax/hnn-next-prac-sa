import { useState } from "react";
import Input from "../elements/form/input";

export default function CommentForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.type !== "submit") return;

    // 여기서 댓글 작성
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="comment"
        title="댓글"
        value={comment}
        setState={setComment}
      />
      <button>작성</button>
    </form>
  );
}
