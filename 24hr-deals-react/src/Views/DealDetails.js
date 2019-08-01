import React, { Component } from "react";
import { Card, Row, Col, Statistic } from "antd";
import dealService from "../Services/DealsService"

const { Countdown } = Statistic;


function onFinish() {
  console.log('finished!');
}
const { Meta } = Card;
export default class DealDetails extends Component {
  state = {
    deal: {},
    product: {}
  }
  componentDidMount() {
   const dealID = this.props.match.params.id;
   dealService.getDealById(dealID, (data => {
     this.setState({deal: data[0]})
     dealService.getDProductById(data[0].ProductId, (resdata) => {
       this.setState({product: resdata[0]});       
     })
    }))
  }
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
                  src={this.state.product.ProductImage}
                />
              }
            >
              <Meta
                title={this.state.product.ProductName}
                description={
                  <h4>
                    {this.state.product.Price} <div style={{ color: "Red" }}>{this.state.deal.Discount}% Off</div>
                  </h4>
                }
              />
            </Card>
          </Col>
          <Col span={18}>
            <Card>
              <div style={{paddingLeft: "2em"}}>
            <Countdown title="Time Remaining" value={this.state.deal.DealEndDate} valueStyle={{ color: "Red"}} onFinish={onFinish}/>             
            </div>
              <Row>
                <Col span={10}>
                  <Card>Deal Start date</Card>
                </Col>
                <Col span={14}>
                  <Card>{new Date(this.state.deal.DealStartDate).toString()}</Card>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Card>Deal End date</Card>
                </Col>
                <Col span={14}>
                  <Card>{new Date(this.state.deal.DealEndDate).toString()}</Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <ul>
                      <li>{this.state.product.ProductDescription}</li>
                    </ul>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}
