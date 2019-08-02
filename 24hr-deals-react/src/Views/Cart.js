import React, { Component } from "react";
import { Card, List, Avatar, Button } from "antd";

export default class Cart extends Component {
  removeFromCart = id => {
    this.props.removeFromCart(id);
  };

  showDetails = id => {
    this.props.history.push(`/${id}`);
  };
  checkOut = () => {
    this.props.checkoutCart();
  }

  render() {
    return (
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={this.props.cart}
          renderItem={item => (
            <List.Item
              actions={[
                <Button onClick={() => this.removeFromCart(item.DealId)}>
                  Remove
                </Button>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar shape="square" size={64} src={item.ProductImage} />}
                title={
                  <h4 onClick={() => this.showDetails(item.DealId)}>
                    {item.ProductName}
                  </h4>
                }
                description={item.ProductDescription}
              />
            </List.Item>
          )}
        />
        <Button onClick={() => this.checkOut()}>Checkout</Button>
      </Card>
    );
  }
}
