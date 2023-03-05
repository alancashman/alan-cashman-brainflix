import SidebarVideo from "../SidebarVideo/SidebarVideo";
import "./Videos.scss";

function Videos({ videos, selectedVideo, videoClickHandler }) {
  return (
    <div className="videos">
      <h2 className="videos__heading">Next Videos</h2>
      {videos
        .filter((video) => video.id !== selectedVideo.id)
        .map((video) => (
          <SidebarVideo
            video={video}
            key={video.id}
            videoClickHandler={videoClickHandler}
          />
        ))}
    </div>
  );
}

export default Videos;
