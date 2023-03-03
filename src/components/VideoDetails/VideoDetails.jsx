import Comments from "../Comments/Comments";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

function VideoDetails({ selectedVideo }) {
  const dateOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  };

  return (
    <main className="details">
      <h1 className="details__heading">{selectedVideo.title}</h1>
      <div className="details__details">
        <div className="details__left">
          <p className="details__author">By {selectedVideo.channel}</p>
          <p className="details__date">
            {new Date(selectedVideo.timestamp).toLocaleDateString(
              "en-us",
              dateOptions
            )}
          </p>
        </div>
        <div className="details__right">
          <p className="details__views">
            <img src={viewsIcon} alt="views icon" className="details__icon" />{" "}
            {selectedVideo.views}
          </p>
          <p className="details__likes ">
            <img src={likesIcon} alt="likes icon" className="details__icon" />
            {selectedVideo.likes}
          </p>
        </div>
      </div>

      <p className="details__text">{selectedVideo.description}</p>
      <p className="details__comments">
        {selectedVideo.comments.length} Comments
      </p>
      {/* <Comments /> */}
    </main>
  );
}

export default VideoDetails;
