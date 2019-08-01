import React, { Component } from "react";
import { Card, Row, Col } from "antd";

const { Meta } = Card;
export default class DealDetails extends Component {
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
              <Meta title="Name" description={<h4>Price <div style={{color: "Red"}}>25% Off</div></h4>} />
            </Card>
          </Col>
          <Col span={18}>
            <Card>
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
                  <Card>{new Date().toString()}</Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}
