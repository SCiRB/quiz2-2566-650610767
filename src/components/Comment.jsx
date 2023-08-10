import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <img src ={userImagePath} width="48" height="48" className="rounded-circle"style={{ objectFit: "cover" }}></img>
      <div className="rounded rounded-3 p-2" style={{ backgroundColor: "#E5E7EB" }}>
        <span className="fw-semibold"> {username} </span>
        <span>{commentText}</span>
      </div>
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">{likeNum}</span>
      </div>
      <div>{replies.map((replies) => (
          <Reply
            userImagePath={replies.userImagePath}
            username={replies.username}
            replyText={replies.replyText}
            likeNum={replies.likeNum}
          />
        ))}</div>
      {/* map-loop render Reply component here */}
    </div>
  );
};
