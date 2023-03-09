import { useState, useEffect } from "react";
import videoDetail from "../data/video-details.json";

import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../components/VideoDetails/VideoDetails";
import Comments from "../components/Comments/Comments";
import Videos from "../components/Videos/Videos";

import avatar from "../assets/images/Mohan-muruge.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "2bdbf64f-7358-444e-8d32-783e25a7d861";

function HomePage() {
  // This object prevents the errors caused by attempting to perform methods on the empty object that would otherwise initialize state on page load
  const preLoadVideoDummy = {
    title: "",
    channel: "",
    timestamp: "",
    views: "",
    likes: "",
    comments: [],
    avatar: "",
    id: "",
    image: "",
    video: "",
  };

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(preLoadVideoDummy);
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
      .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setSelectedVideo(response.data);
      });
  }

  function getVideos() {
    axios.get(`${API_URL}/videos?api_key=${API_KEY}`).then((response) => {
      setVideos(response.data);
    });
  }

  // const videoClickHandler = function (id) {
  //   getVideo(id);
  // };

  return (
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
          <Videos
            videos={videos}
            selectedVideo={selectedVideo}
            // videoClickHandler={videoClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
