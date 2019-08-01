import React, { Component } from 'react'
import { Card, List, Avatar, Button } from "antd";
import ProfileImage from './ProfileImage';

export default class Profile extends Component {
   profile= [{
        id:1,
        title: "Ash Ketchum",
        avatar: "https://pbs.twimg.com/media/CXt6TRMWkAAYtlB.jpg",
        desc: "Trainer from Pallet Town"
      }];
    render() {
        return (
            <Card>
            <List
              itemLayout="vertical"
              dataSource={this.profile}
              renderItem={item => (
                <List.Item >
                  <List.Item.Meta
                    avatar={<Avatar shape="square" size={64} src={item.avatar} />}
                    title={
                      <h4 onClick={() => this.showDetails(item.id)}>
                        {item.title}
                      </h4>
                    }
                    description={item.desc}s
                  />
                </List.Item>
              )}
            />
          </Card>
        )
    }
}