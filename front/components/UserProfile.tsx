import { Avatar, Card } from "antd";
import React from "react";

const dummy = {
  nickName: "danah",
  post: [],
  followings: [],
  followers: [],
  isLogindIn: false
};

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {dummy.post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {dummy.followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {dummy.followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickName[0]}</Avatar>}
        title={dummy.nickName}
      />
    </Card>
  );
};

export default UserProfile;
