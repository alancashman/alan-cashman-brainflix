import { useState } from "react";

import "./App.scss";
import videoDetails from "./data/video-details.json";
import videoData from "./data/videos.json";
// import "./styles/partials/global.scss";

import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";

import avatar from "./assets/images/Mohan-muruge.jpg";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  return (
    <div className="App">
      <Header avatar={avatar} />
      <VideoPlayer selectedVideo={selectedVideo} data={videoDetails} />
      <VideoDetails selectedVideo={selectedVideo} data={videoDetails} />
      <Comments selectedVideo={selectedVideo} avatar={avatar} />
    </div>
  );
}

export default App;
