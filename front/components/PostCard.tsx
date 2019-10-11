import React from "react";
import { Card, Icon, Button, Avatar } from "antd";

interface Props {
  post: {
    user: { id: number; nickName: string };
    content: string;
    img: string;
    createdAt: string;
  };
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.user.nickName[0]}</Avatar>}
        title={post.user.nickName}
        description={post.content}
      />
    </Card>
  );
};

export default PostCard;
