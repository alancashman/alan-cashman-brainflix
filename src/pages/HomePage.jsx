import { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../components/VideoDetails/VideoDetails";
import Comments from "../components/Comments/Comments";
import Videos from "../components/Videos/Videos";
import avatar from "../assets/images/Mohan-muruge.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
      getVideo(videoId);
    } else if (videos.length) {
      getVideo(videos[0].id);
    }
  }, [videoId, videos]);

  function getVideo(videoId) {
    axios
      .get(`${API_URL}/videos/${videoId}`)
      .then((response) => {
        console.log(response.data);
        setSelectedVideo(response.data);
      })
      .catch((err) => console.error(err));
  }

  function getVideos() {
    axios
      .get(`${API_URL}/videos`)
      .then((response) => {
        console.log(response.data);
        const videosData = response.data.map(
          (video) =>
            (video = {
              id: video.id,
              image: video.image,
              title: video.title,
            })
        );
        setVideos(videosData);
      })
      .catch((err) => console.error(err));
  }

  return (
    selectedVideo.id && (
      <div>
        <VideoPlayer selectedVideo={selectedVideo} />
        <div className="desktop-container">
          <div className="desktop-subcontainer">
            <VideoDetails selectedVideo={selectedVideo} />
            <Comments
              selectedVideo={selectedVideo}
              getVideo={getVideo}
              avatar={avatar}
            />
          </div>
          <div className="desktop-subcontainer">
            <Videos videos={videos} selectedVideo={selectedVideo} />
          </div>
        </div>
      </div>
    )
  );
}

export default HomePage;
