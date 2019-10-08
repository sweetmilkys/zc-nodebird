import React from "react";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      user: {
        id: 1,
        nickName: "sweetmilky"
      },
      content: "첫 번째 게시글",
      img: "https://www.danah.dev/avatar.png",
      createdAt: "20191008"
    }
  ]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(c => {
        return <PostCard key={+c} post={c} />;
      })}
    </div>
  );
};

export default Home;
