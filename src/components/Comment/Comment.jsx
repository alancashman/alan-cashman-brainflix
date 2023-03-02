function Comment(props) {
  return (
    <div className="comment" key={props.comment.id}>
      <div className="comment__left"></div>
      <div className="comment__right">
        <div className="comment__header">
          <h5 className="comment__name">{props.comment.name}</h5>
          <p className="comment__date">
            {new Date(props.comment.timestamp).toLocaleDateString("en-us")}
          </p>
        </div>
        <p className="comment__text">{props.comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
