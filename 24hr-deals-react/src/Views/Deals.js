import React, { Component } from "react";
import { Row, Col, Card, Icon, notification, message } from "antd";

const { Meta } = Card;
export default class Deals extends Component {
  showDetails = (id) => {
    this.props.history.push(`/${id}`)
  }

  addToCart = (deal) => {
    this.props.addToCart(deal, () => {
      notification.open({
        message: 'Added To Cart',
        description:
        `Added ${deal.ProductName} to Cart. You can checkout at anytime`,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      })
    },
    () => {message.error("Item already in cart")}
    );
    
  }

  shareClick = () => {
    message.error("Share functionality not yet available")
  }
  

  render() {

    const deals = this.props.deals.map(deal => {
      return (
        <Col span={6} key={deal.DealId}>
            <Card
              
              style={{
                margin: "10px"
              }}
              cover={
                <img
                  alt="example"
                  src={deal.ProductImage}
                  onClick={() => this.showDetails(deal.DealId)}
                />
              }
              actions={[
                <Icon type="shopping-cart" onClick={() => this.addToCart(deal)} />,
                <Icon type="share-alt" onClick={() => this.shareClick()}/>
              ]}
            >
              <Meta
                title={deal.ProductName}
                description={deal.Price}
              />
            </Card>
          </Col>
      );
    })
    return (
      <div>
        <Row>
          {deals}
        </Row>
      </div>
    );
  }
}
