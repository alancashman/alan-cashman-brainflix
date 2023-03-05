import "./Comments.scss";
<<<<<<< HEAD
import commentIcon from "../../assets/icons/add_comment.svg";

function Comments(props) {
  console.log(props);

  return (
    <div className="comments">
      <div className="comments__form">
        <h3 className="comments__header">Join the Conversation</h3>
        <form action="submit" className="comments-form">
          <div className="comments-form__left">
            <img src={props.avatar} className="avatar" alt="avatar" />
          </div>
          <div className="comments-form__right">
            <input type="text" placeholder="Add a new comment" />
            <button className="comments__button">
              <img src={commentIcon} alt="comment icon" />
              Comment
            </button>
          </div>
        </form>
      </div>

      {props.selectedVideo.comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="comment__left"></div>
          <div className="comment__right">
            <div className="comment__header">
              <h5 className="comment__name">{comment.name}</h5>
              <p className="comment__date">
                {new Date(comment.timestamp).toLocaleDateString("en-us")}
              </p>
            </div>
            <p className="comment__text">{comment.comment}</p>
          </div>
        </div>
=======
import Comment from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";

function Comments(props) {
  return (
    <div className="comments">
      <CommentsForm avatar={props.avatar} />

      {props.selectedVideo.comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
>>>>>>> sprint-1
      ))}
    </div>
  );
}

export default Comments;
