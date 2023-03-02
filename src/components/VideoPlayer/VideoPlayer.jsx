import "./VideoPlayer.scss";

function VideoPlayer(props) {
  return (
    <video
      src=""
      poster={props.selectedVideo.image}
      controls
      className="video-player"
    ></video>
  );
}

export default VideoPlayer;
