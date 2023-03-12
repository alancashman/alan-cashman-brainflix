import "./Comment.scss";
import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "2bdbf64f-7358-444e-8d32-783e25a7d861";

function Comment({ comment, selectedVideo, getVideo }) {
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

  function deleteCommentHandler() {
    axios
      .delete(
        `${API_URL}/videos/${selectedVideo.id}/comments/${comment.id}?api_key=${API_KEY}`
      )
      .then((res) => {
        console.log(res);
        getVideo(selectedVideo.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <li className="comment">
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
        <div className="comment__row"></div>
        <p className="comment__text">{comment.comment}</p>
        <button className="comment__delete-btn" onClick={deleteCommentHandler}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default Comment;
