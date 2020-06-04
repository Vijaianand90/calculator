import React, { Component } from "react";
import { Container, Row, Col, Form, Input, Button } from "react-bootstrap";

class Control extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Button onClick={this.props.on7ControlClick}>7</Button>
            </Col>
            <Col>
              <Button onClick={this.props.on8ControlClick}>8</Button>
            </Col>
            <Col>
              <Button onClick={this.props.on9ControlClick}>9</Button>
            </Col>
            <Col>
              <Button onClick={this.props.ondivisionControlClick}>/</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button onClick={this.props.on4ControlClick}>4</Button>
            </Col>
            <Col>
              <Button onClick={this.props.on5ControlClick}>5</Button>
            </Col>
            <Col>
              <Button onClick={this.props.on6ControlClick}>6</Button>
            </Col>
            <Col>
              <Button onClick={this.props.onplusControlClick}>+</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button onClick={this.props.on1ControlClick}>1</Button>
            </Col>
            <Col>
              <Button onClick={this.props.on2ControlClick}>2</Button>
            </Col>
            <Col>
              <Button onClick={this.props.on3ControlClick}>3</Button>
            </Col>
            <Col>
              <Button onClick={this.props.onminusControlClick}>-</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button onClick={this.props.onpointControlClick}>.</Button>
            </Col>
            <Col>
              <Button id="zeroButton" onClick={this.props.on0ControlClick}>0</Button>
            </Col>
            <Col>
              <Button onClick={this.props.onequalControlClick}>=</Button>
            </Col>
            <Col>
              <Button onClick={this.props.onmultiplyControlClick}>x</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Control;
