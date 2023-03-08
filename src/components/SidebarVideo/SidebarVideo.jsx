import "./SidebarVideo.scss";
import { Link } from "react-router-dom";

function SidebarVideo({ video, videoClickHandler }) {
  return (
    <Link to={`/videos/${video.id}`}>
      <div
        className="sidebar-video"
        onClick={() => videoClickHandler(video.id)}
      >
        <div className="sidebar-video__left">
          <img
            src={video.image}
            className="sidebar-video__thumbnail"
            alt={video.title}
          />
        </div>
        <div className="sidebar-video__right">
          <h3 className="sidebar-video__title">{video.title}</h3>
          <h5 className="sidebar-video__channel">{video.channel}</h5>
        </div>
      </div>
    </Link>
  );
}

export default SidebarVideo;
