import React, { ReactNode } from "react";
import Link from "next/link";
import { Menu, Input, Row, Col, Card, Avatar } from "antd";

import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const dummy = {
  nickName: "danah",
  post: [],
  followings: [],
  followers: [],
  isLoggedIn: false
};

interface Props {
  children: ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
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
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="/">
            <a target="_blank">Made by danah</a>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default AppLayout;
