import "./Comments.scss";
import Comment from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";

function Comments({ avatar, selectedVideo, getVideo }) {
  console.log(selectedVideo.comments);

  return (
    <div className="comments">
      <CommentsForm
        avatar={avatar}
        selectedVideo={selectedVideo}
        getVideo={getVideo}
      />

      <ul>
        {selectedVideo.comments
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((comment) => (
            <Comment
              comment={comment}
              key={comment.id}
              selectedVideo={selectedVideo}
              getVideo={getVideo}
            />
          ))}
      </ul>
    </div>
  );
}

export default Comments;
