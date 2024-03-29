import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function VideoDetails({ selectedVideo, getVideo }) {
  // useEffect(() => {
  //   getVideo();
  // }, [selectedVideo.likes]);

  const [likes, setLikes] = useState(selectedVideo.likes);

  function likeHandler() {
    axios
      .put(`${API_URL}/videos/${selectedVideo.id}/likes`)
      .then((res) => {
        console.log(res);
        setLikes(res.data);
        getVideo(selectedVideo.id);
      })
      .catch((err) => console.error(err));
  }

  const dateOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
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
            <img
              src={likesIcon}
              alt="likes icon"
              className="details__icon details__like-btn"
              onClick={likeHandler}
            />
            {selectedVideo.likes.toLocaleString()}
          </p>
        </div>
      </div>

      <p className="details__text">{selectedVideo.description}</p>
      <p className="details__comments">
        {selectedVideo.comments.length} Comments
      </p>
    </main>
  );
}

export default VideoDetails;
