import React, { Component } from "react";
import { Card, List, Avatar, Button } from "antd";

export default class Cart extends Component {
  removeFromCart = id => {
    this.props.removeFromCart(id);
  };

  showDetails = id => {
    this.props.history.push(`/${id}`);
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
                avatar={<Avatar shape="square" size={64} src={item.avatar} />}
                title={
                  <h4 onClick={() => this.showDetails(item.id)}>
                    {item.title}
                  </h4>
                }
                description={item.desc}
              />
            </List.Item>
          )}
        />
      </Card>
    );
  }
}
