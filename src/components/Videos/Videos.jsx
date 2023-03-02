import SidebarVideo from "../SidebarVideo/SidebarVideo";

function Videos(props) {
  console.log(props.videos);
  return (
    <div>
      <h2 className="videos__heading">Next Videos</h2>
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <SidebarVideo video={video} key={video.id} />
        ))}
    </div>
  );
}

export default Videos;
