import React, { Component } from "react";
import { Row, Col, Card, Icon, notification, message } from "antd";

const { Meta } = Card;
export default class Deals extends Component {
  state = {
    deals: [
      {
        id:1,
        title: "hello",
        desc: "Worlds apart"
      },
      {
        id:2,
        title: "there",
        desc: "Distint World"
      },
      {
        id:3,
        title: "test",
        desc: "Fisher man's greatest love"
      },
      {
        id:4,
        title: "test",
        desc: "Fisher man's greatest love"
      },
      {
        id:5,
        title: "test",
        desc: "Fisher man's greatest love"
      },

    ]
  }
  showDetails = (id) => {
    this.props.history.push(`/${id}`)
  }

  addToCart = (deal) => {
    notification.open({
      message: 'Added To Cart',
      description:
      `Added ${deal.title} to Cart. You can checkout at anytime`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }

  shareClick = () => {
    message.error("Share functionality not yet available")
  }
  

  render() {

    const deals = this.state.deals.map(deal => {
      return (
        <Col span={6} key={deal.id}>
            <Card
              
              style={{
                margin: "10px"
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  onClick={() => this.showDetails(deal.id)}
                />
              }
              actions={[
                <Icon type="shopping-cart" onClick={() => this.addToCart(deal)} />,
                <Icon type="share-alt" onClick={() => this.shareClick()}/>
              ]}
            >
              <Meta
                title={deal.title}
                description={deal.desc}
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
