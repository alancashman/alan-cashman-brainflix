import "./Comment.scss";

function Comment({ comment }) {
  function getRelativeTimestamp(timestamp) {
    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime();

    const differenceInSeconds = (currentTimestamp - timestamp) / 1000;
    let output = ``;
    if (Math.floor(differenceInSeconds) <= 0) {
      // comment was just posted
      output = `Just now`;
    } else if (differenceInSeconds < 60) {
      // less than a minute has passed
      Math.floor(differenceInSeconds) === 1
        ? (output = `${Math.floor(differenceInSeconds)} second ago`)
        : (output = `${Math.floor(differenceInSeconds)} seconds ago`);
    } else if (differenceInSeconds < 3600) {
      // less than an hour has passed
      Math.floor(differenceInSeconds / 60) === 1
        ? (output = `${Math.floor(differenceInSeconds / 60)} minute ago`)
        : (output = `${Math.floor(differenceInSeconds / 60)} minutes ago`);
    } else if (differenceInSeconds < 86400) {
      // less than a day has passed
      Math.floor(differenceInSeconds / 3600) === 1
        ? (output = `${Math.floor(differenceInSeconds / 3600)} hour ago`)
        : (output = `${Math.floor(differenceInSeconds / 3600)} hours ago`);
    } else if (differenceInSeconds < 2620800) {
      // less than a month has passed
      Math.floor(differenceInSeconds / 86400) === 1
        ? (output = `${Math.floor(differenceInSeconds / 86400)} day ago`)
        : (output = `${Math.floor(differenceInSeconds / 86400)} days ago`);
    } else if (differenceInSeconds < 31449600) {
      // less than a year has passed
      Math.floor(differenceInSeconds / 2620800) === 1
        ? (output = `${Math.floor(differenceInSeconds / 2620800)} month ago`)
        : (output = `${Math.floor(differenceInSeconds / 2620800)} months ago`);
    } else {
      // more than a year has passed
      Math.floor(differenceInSeconds / 31449600) === 1
        ? (output = `${Math.floor(differenceInSeconds / 31449600)} year ago`)
        : (output = `${Math.floor(differenceInSeconds / 31449600)} years ago`);
    }
    return output;
  }

  return (
    <div className="comment" key={comment.id}>
      <div className="comment__left">
        <div className="comment__avatar" />
      </div>
      <div className="comment__right">
        <div className="comment__header">
          <h5 className="comment__name">{comment.name}</h5>
          <p className="comment__date">
            {getRelativeTimestamp(comment.timestamp)}
          </p>
        </div>
        <p className="comment__text">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
