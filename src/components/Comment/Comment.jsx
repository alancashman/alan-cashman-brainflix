import "./Comment.scss";

function Comment({ comment }) {
  const dateOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  console.log(comment);

  return (
    <div className="comment" key={comment.id}>
      <div className="comment__left">
        <img src=" " className="comment__avatar" />
      </div>
      <div className="comment__right">
        <div className="comment__header">
          <h5 className="comment__name">{comment.name}</h5>
          <p className="comment__date">
            {new Date(comment.timestamp).toLocaleDateString(
              "en-us",
              dateOptions
            )}
          </p>
        </div>
        <p className="comment__text">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
