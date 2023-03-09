import "./Comments.scss";
import { useState, useEffect } from "react";
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

      {selectedVideo.comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  );
}

export default Comments;
