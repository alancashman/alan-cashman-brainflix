import { useState } from "react";

import "./App.scss";
import videoDetails from "./data/video-details.json";
import videoData from "./data/videos.json";
import "./styles/partials/global.scss";

import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";

import avatar from "./assets/images/Mohan-muruge.jpg";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  console.log(videos);
  return (
    <div className="App">
      <Header avatar={avatar} />
      <VideoPlayer selectedVideo={selectedVideo} data={videoDetails} />
      <VideoDetails selectedVideo={selectedVideo} data={videoDetails} />
      <Comments selectedVideo={selectedVideo} avatar={avatar} />
      <Videos videos={videos} selectedVideo={selectedVideo} />
    </div>
  );
}

export default App;
