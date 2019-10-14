import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
// import { login, logout } from "../reducers/user";
import { login, logout, UserData } from "../reducers/user";
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

const Home = ({
  user,
  login,
  logout
}: {
  user: any;
  login: (arg0: UserData) => void;
  logout: () => void;
}) => {
  //const dispatch = useDispatch();
  //const { isLoggedIn, user } = useSelector((state: StoreState) => state.user);
  //console.log(user.user);
  useEffect(() => {
    //dispatch(login({ nickName: "sweetmilky" }));
    login({ nickName: "sweetmilky" });
    //dispatch(logout);
    logout();
    //dispatch(login({ nickName: "sweetmilky" }));
    login({ nickName: "sweetmilky" });
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

function mapStateToProps(state: StoreState) {
  return {
    user: state.user.user
  };
}

function mapDispatchToProps(dispatch: {
  (arg0: { type: string; data: UserData }): void;
  (arg0: { type: string }): void;
}) {
  return {
    login: (data: UserData) => dispatch(login(data)),
    logout: () => dispatch(logout)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
