import "./VideoPlayer.scss";

function VideoPlayer(props) {
  console.log(props.selectedVideo);
  return (
    <video
      src={props.selectedVideo.video}
      poster={props.selectedVideo.image}
      controls
      className="video-player"
    ></video>
  );
}

export default VideoPlayer;
