import Comments from "../Comments/Comments";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function VideoDetails(props) {
  const dateOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  };

  return (
    <main className="details">
      <h1 className="details__heading">{props.selectedVideo.title}</h1>
      <div className="details__details">
        <p className="details__author">By {props.selectedVideo.channel}</p>
        <p className="details__date">
          {new Date(props.selectedVideo.timestamp).toLocaleDateString(
            "en-us",
            dateOptions
          )}
        </p>
        <p className="details__views">
          <img src={viewsIcon} alt="views icon" className="details__icon" />{" "}
          {props.selectedVideo.likes}
        </p>
        <p className="details__likes">
          <img src={likesIcon} alt="likes icon" />
          110,985
        </p>
        <p className="details__text">{props.selectedVideo.description}</p>
        <p className="details__comments">
          {props.selectedVideo.comments.length} Comments
        </p>
      </div>
      {/* <Comments /> */}
    </main>
  );
}

export default VideoDetails;
