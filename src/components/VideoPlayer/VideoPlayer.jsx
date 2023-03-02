import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  return (
    <video
      src={selectedVideo.video}
      poster={selectedVideo.image}
      controls
      className="video-player"
    ></video>
  );
}

export default VideoPlayer;
