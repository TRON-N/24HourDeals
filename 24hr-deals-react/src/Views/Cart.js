import React, { Component } from "react";
import { Card, List, Avatar, Button } from "antd";

export default class Cart extends Component {
  removeFromCart = id => {
    this.props.removeFromCart(id);
  };
  render() {
    return (
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={this.props.cart}
          renderItem={item => (
            <List.Item
              actions={[
                <Button onClick={() => this.removeFromCart(item.id)}>
                  Remove
                </Button>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.desc}
              />
            </List.Item>
          )}
        />
      </Card>
    );
  }
}
