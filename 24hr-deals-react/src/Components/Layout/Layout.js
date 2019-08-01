import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
export default class AppLayout extends Component {
  componentDidMount() {
    console.log(this.props.categories);
  }
  render() {

    const categories = this.props.categories.map(cat => {
      return (
        <Menu.Item key={`cat:${cat.id}`}><Link to="/">{cat.name}</Link></Menu.Item>
      );
    })

    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="appstore" />
                Deals
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="bars" />
                  Categories
                </span>
              }
            >
              {categories}
            </SubMenu>
            <Menu.Item key="2">
              <Link to="/cart">
                {" "}
                <Icon type="shopping-cart" />
                Cart
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/">
                {" "}
                <Icon type="user" />
                My Profile
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Inventory Design ©2018 Created by Zen
        </Footer>
      </Layout>
    );
  }
}
