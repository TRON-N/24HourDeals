import React, { Component } from 'react'
import { Card, List, Avatar, Button,Row, Col  } from "antd";

const { Meta } = Card;

export default class Profile extends Component {
   profile= {
        id:1,
        title: "Ash Ketchum",
        avatar: "https://pbs.twimg.com/media/CXt6TRMWkAAYtlB.jpg",
        desc: "Trainer from Pallet Town"
      };
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
                      src= {this.profile.avatar}
                    />
                  }
                >
                  <Meta
                    title={this.profile.title}
                  />
                </Card>
              </Col>
              <Col span={18}>
                <Card>
                  {this.profile.desc}
                </Card>
              </Col>
            </Row>
          </Card>
        )
    }
}