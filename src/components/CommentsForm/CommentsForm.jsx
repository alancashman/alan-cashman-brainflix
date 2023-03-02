import commentIcon from "../../assets/icons/add_comment.svg";

function CommentsForm(props) {
  return (
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
  );
}

export default CommentsForm;
