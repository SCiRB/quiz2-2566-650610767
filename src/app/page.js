"use client";
import React, {useEffect} from "react";
import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        <PostOwner
          OwnerImagePath ="/profileImages/FB_Profile.jpg" 
          OwnerName={"Tanapat Choeichomsri 650610767"}
          OwnerText={"ทำ Quiz จนท้อแล้วครับ ได้โปรดปราณีด้วย"}
          OwnerLikeNum={"100 คน"}
        ></PostOwner>

        <div>{comments.map((comments) => (
          <Comment
            userImagePath={comments.userImagePath}
            username={comments.username}
            commentText={comments.commentText}
            likeNum={comments.likeNum}
            replies={comments.replies}
          ></Comment>
        ))}</div>
        
      </div>
    </div>
  );
}
