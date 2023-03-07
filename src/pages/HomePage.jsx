import { useState } from "react";
import videoDetails from "../data/video-details.json";
import videoData from "../data/videos.json";

import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../components/VideoDetails/VideoDetails";
import Comments from "../components/Comments/Comments";
import Videos from "../components/Videos/Videos";

import avatar from "../assets/images/Mohan-muruge.jpg";

function HomePage() {
  const [videos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const videoClickHandler = function (id) {
    const foundVideo = videoDetails.filter((video) => video.id === id);
    setSelectedVideo(foundVideo[0]);
  };
  return (
    <div>
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="desktop-container">
        <div className="desktop-subcontainer">
          <VideoDetails selectedVideo={selectedVideo} />
          <Comments selectedVideo={selectedVideo} avatar={avatar} />
        </div>
        <div className="desktop-subcontainer">
          <Videos
            videos={videos}
            selectedVideo={selectedVideo}
            videoClickHandler={videoClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
