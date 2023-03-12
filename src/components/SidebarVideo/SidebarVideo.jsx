import "./SidebarVideo.scss";
import { Link } from "react-router-dom";

function SidebarVideo({ video }) {
  function handleScrollToTop() {
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
  }
  return (
    <Link
      to={`/videos/${video.id}`}
      className="sidebar-video__link"
      onClick={handleScrollToTop}
    >
      <li className="sidebar-video">
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
      </li>
    </Link>
  );
}

export default SidebarVideo;
