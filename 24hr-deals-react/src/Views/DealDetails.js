import React, { Component } from "react";
import { Card, Row, Col, Statistic } from "antd";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2;

function onFinish() {
  console.log('finished!');
}
const { Meta } = Card;
export default class DealDetails extends Component {
  componentDidMount() {
   console.log(this.props.match.params.id);
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhIVnfYQHFIx5utaNEnDgdtlcvIQRYKufVwiKPx3k3Nff3tt1"
                />
              }
            >
              <Meta
                title="Name"
                description={
                  <h4>
                    Price <div style={{ color: "Red" }}>25% Off</div>
                  </h4>
                }
              />
            </Card>
          </Col>
          <Col span={18}>
            <Card>
              <div style={{paddingLeft: "2em"}}>
            <Countdown title="Time Remaining" value={deadline} valueStyle={{ color: "Red"}} onFinish={onFinish}/>             
            </div>
              <Row>
                <Col span={10}>
                  <Card>Deal Start date</Card>
                </Col>
                <Col span={14}>
                  <Card>{new Date().toString()}</Card>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Card>Deal End date</Card>
                </Col>
                <Col span={14}>
                  <Card>{ Date(deadline)}</Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <ul>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
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
