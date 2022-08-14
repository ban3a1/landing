import React from "react";
import Post from "./Post";

export default function PostPage() {
  return (
    <div className="container">
      <div className="post-page">
        <Post
          tag={"Stories"}
          title={"Travel In Japan: The True Experience"}
          play={""}
          img={"./post1.png"}
        />
        <Post
          tag={"Video Tutor"}
          title={"Helping Wild Turtles"}
          play={"https://www.youtube.com/watch?v=7MP82T7IzkQ"}
          img={"./post2.png"}
        />
        <Post
          tag={"Photo Story"}
          title={"Threats of industrial world"}
          img={"./post3.png"}
        />
      </div>
    </div>
  );
}
