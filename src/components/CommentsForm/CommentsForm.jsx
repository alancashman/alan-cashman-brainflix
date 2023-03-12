import "./CommentsForm.scss";
import { useState } from "react";
import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "2bdbf64f-7358-444e-8d32-783e25a7d861";

function CommentsForm({ selectedVideo, getVideo }) {
  const [comment, setComment] = useState("");
  const [commentClass, setCommentClass] = useState("comments-form__field");
  const [commentPlaceholder, setCommentPlaceholder] =
    useState("Add a new comment");

  function postComment(e) {
    e.preventDefault();
    if (e.target.comment.value === "") {
      setCommentClass("comments-form__field comments-form__field--invalid");
      setCommentPlaceholder("Please input the text of your comment");
      return;
    }
    const comment = {
      name: "Guest",
      comment: e.target.comment.value,
    };
    axios
      .post(
        `${API_URL}/videos/${selectedVideo.id}/comments?api_key=${API_KEY}`,
        comment
      )
      .then((response) => {
        getVideo(selectedVideo.id);
        setComment("");
        setCommentPlaceholder("Add a new comment");
      });
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
    setCommentClass("comments-form__field");
  }

  return (
    <div className="comments-form">
      <div className="comments-form__left">
        <div className="avatar" />
      </div>
      <form
        action="submit"
        className="comments-form__right"
        onSubmit={postComment}
      >
        <h3 className="comments-form__heading">Join the Conversation</h3>
        <div className="comments-form__row">
          <textarea
            placeholder={commentPlaceholder}
            className={commentClass}
            name="comment"
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <button className="comments-form__button">Comment</button>
        </div>
      </form>
    </div>
  );
}

export default CommentsForm;
