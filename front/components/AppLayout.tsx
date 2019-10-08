import React, { ReactNode } from "react";
import Link from "next/link";
import { Menu, Input, Button, Row, Col, Card, Avatar } from "antd";

const dummy = {
  nickName: "danah",
  post: [],
  followings: [],
  followers: []
};

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          <Card
            actions={[
              <div key="twit">
                짹짹
                <br />
                {dummy.post.length}
              </div>,
              <div key="flolwing">
                짹짹
                <br />
                {dummy.followings.length}
              </div>,
              <div key="flolwer">
                짹짹
                <br />
                {dummy.followers.length}
              </div>
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{dummy.nickName[0]}</Avatar>}
              title={dummy.nickName}
            ></Card.Meta>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
      <Link href="/signup">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
    </>
  );
};

export default AppLayout;
