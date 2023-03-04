import commentIcon from "../../assets/icons/add_comment.svg";
import "./CommentsForm.scss";

function CommentsForm(props) {
  return (
    <div className="comments-form">
      <div className="comments-form__left">
        <img src={props.avatar} className="avatar" alt="avatar" />
      </div>
      <form action="submit" className="comments-form__right">
        <h3 className="comments-form__heading">Join the Conversation</h3>
        <div className="comments-form__row">
          <textarea
            placeholder="Add a new comment"
            className="comments-form__field"
          />
          <button className="comments-form__button">
            <img
              src={commentIcon}
              alt="comment icon"
              className="comments-form__icon"
            />
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentsForm;
