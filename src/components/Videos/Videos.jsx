import SidebarVideo from "../SidebarVideo/SidebarVideo";
import "./Videos.scss";

function Videos({ videos, selectedVideo }) {
  return (
    <div className="videos">
      <h2 className="videos__heading">Next Videos</h2>
      <ul className="videos__list">
        {videos
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => (
            <SidebarVideo video={video} key={video.id} />
          ))}
      </ul>
    </div>
  );
}

export default Videos;
