import "./Comments.scss";
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
      ))}
    </div>
  );
}

export default Comments;
