import "./Comments.scss";
import Comment from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";

function Comments(props) {
  console.log(props);

  return (
    <div className="comments">
      <CommentsForm avatar={props.avatar} />

      {props.selectedVideo.comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default Comments;
