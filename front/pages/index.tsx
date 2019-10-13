import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { login, logout } from "../reducers/user";
import { StoreState } from "../reducers";

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
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state: StoreState) => state.user);

  useEffect(() => {
    dispatch(login({ nickName: "sweetmilky" }));
    dispatch(logout);
    dispatch(login({ nickName: "sweetmilky" }));
  }, []);

  return (
    <div>
      {user ? (
        <div>로그인 했습니다: {user.nickName}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(c => {
        return <PostCard key={+c} post={c} />;
      })}
    </div>
  );
};

export default Home;
