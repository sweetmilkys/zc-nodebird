import React, { ReactNode } from "react";
import Link from "next/link";
import { Menu, Input, Row, Col, Card, Avatar } from "antd";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const dummy = {
  nickName: "danah",
  post: [],
  followings: [],
  followers: [],
  isLogindIn: false
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
          {dummy.isLogindIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </>
  );
};

export default AppLayout;
