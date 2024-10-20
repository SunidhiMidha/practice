import React, { useRef, useState } from "react";
import "./style.css";

export default function Comments() {
  const [comments, updateComments] = useState({
    1: { value: "comment1" },
    2: { value: "comment2" },
    3: { value: "comment3", reply: { 4: { value: "comment31" } } },
  });

  const [input_text, updateInput] = useState("");
  const [selected_id, updateSelectedId] = useState("");
  const inputRef = useRef(null);

  const postComment = () => {
    let id = Date.now();
    if (!selected_id) {
      updateComments((prevComments) => ({
        ...prevComments,
        [id]: { value: input_text },
      }));
    } else {
      let curr = searchComment(
        comments,
        {
          [id]: {
            value: input_text,
          },
        },
        id
      );
      updateComments(curr);
    }
    updateInput("");
    updateSelectedId("");
  };

  const searchComment = (comments, curr, id) => {
    let keys = Object.keys(comments);

    if (keys.includes(selected_id)) {
      if (!comments[selected_id].reply) comments[selected_id].reply = curr;
      else comments[selected_id].reply[id] = curr[id];
      return comments;
    }
    Object.entries(comments).map((it) => {
      const [id, comment] = it;
      if (comment.reply) {
        return searchComment(comment.reply, curr, id);
      }
    });
    return comments;
  };

  const onInputChange = (e) => {
    updateInput(e.target.value);
  };

  const inputComment = () => {
    return (
      <div className="container-row">
        <input
          placeholder={"Enter Comment"}
          ref={inputRef}
          onChange={onInputChange}
          value={input_text}
          autoFocus
          onKeyDown={(e)=>{
            if(e?.key === "Enter") {
              postComment()
            }
          }}
        />
        <button className="post-button" onClick={postComment}>
          Post
        </button>
      </div>
    );
  };

  const replyClick = (id) => {
    updateSelectedId(id);
  };

  const renderComment = (id, comment, nesting) => {
    return (
      <div
        className="comment-container"
        key={id}
        style={{ marginLeft: nesting * 12 }}
      >
        <div className="comment-text">{comment.value}</div>
        <div className="add-reply" onClick={() => replyClick(id)}>
          Reply
        </div>
        {selected_id === id && inputComment()}
      </div>
    );
  };

  const nestedComments = (comments, nesting) => {
    return Object.entries(comments).map((it) => {
      const [id, comment] = it;
      return (
        <>
          {renderComment(id, comment, nesting)}
          {typeof comment.reply == "object" &&
            nestedComments(comment.reply, nesting + 1)}
        </>
      );
    });
  };

  return (
    <div>
      {nestedComments(comments, 0)}
      {!selected_id && inputComment()}
    </div>
  );
}
