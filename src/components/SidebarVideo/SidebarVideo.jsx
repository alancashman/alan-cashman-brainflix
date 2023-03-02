import "./SidebarVideo.scss";

function SidebarVideo(props) {
  return (
    <div className="sidebar-video">
      <div className="sidebar-video__left">
        <img
          src={props.video.image}
          className="sidebar-video__thumbnail"
          alt={props.video.title}
        />
      </div>
      <div className="sidebar-video__right">
        <h3 className="sidebar-video__title">{props.video.title}</h3>
        <h5 className="sidebar-video__channel">{props.video.channel}</h5>
      </div>
    </div>
  );
}

export default SidebarVideo;
