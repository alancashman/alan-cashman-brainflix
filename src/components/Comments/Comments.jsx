import "./Comments.scss";
import Comment from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";

function Comments({ avatar, selectedVideo }) {
  return (
    <div className="comments">
      <CommentsForm avatar={avatar} selectedVideo={selectedVideo} />

      {selectedVideo.comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default Comments;
