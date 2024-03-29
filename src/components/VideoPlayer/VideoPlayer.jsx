import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  return (
    <video
      src={`${selectedVideo.video}?api_key=neocat`}
      poster={selectedVideo.image}
      controls
      className="video-player"
    ></video>
  );
}

export default VideoPlayer;
