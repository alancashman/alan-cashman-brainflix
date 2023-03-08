import "./CommentsForm.scss";
import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "2bdbf64f-7358-444e-8d32-783e25a7d861";

function CommentsForm(props) {
  function postComment(e) {
    e.preventDefault();
    console.log(props.selectedVideo.id);
    axios
      .post(
        `${API_URL}/videos/${props.selectedVideo.id}/comments?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div className="comments-form">
      <div className="comments-form__left">
        <div className="avatar" />
      </div>
      <form action="submit" className="comments-form__right">
        <h3 className="comments-form__heading">Join the Conversation</h3>
        <div className="comments-form__row">
          <textarea
            placeholder="Add a new comment"
            className="comments-form__field"
          />
          <button className="comments-form__button" onClick={postComment}>
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentsForm;
