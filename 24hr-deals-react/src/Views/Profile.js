import React, { Component } from "react";
import { Card, List, Avatar, Row, Col } from "antd";

const { Meta } = Card;

export default class Profile extends Component {
  render() {
    return (
      <Card>
        <Row>
          <Col span={6}>
            <Card
              hoverable
              style={{ maxWidth: "300px" }}
              cover={
                <img
                  alt="example"
                  style={{ maxHeight: "300px" }}
                  src={this.props.profile.UserImage}
                />
              }
            >
              <Meta title={<div>{this.props.profile.FirstName} {this.props.profile.LastName}</div>} />
            </Card>
          </Col>
          <Col span={18}>
            <Card>
              <h1>Your Transaction History</h1>
              <List
                itemLayout="horizontal"
                dataSource={this.props.history}
                renderItem={item => (
                  <List.Item
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar shape="square" size={64} src={item.ProductImage} />
                      }
                      title={
                        <div>
                          {item.ProductName}
                        </div>
                      }
                      description={<div>Item in {item.CategoryName}</div>}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}