import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class ResultPane extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                id="txtResult"
                disabled
                value={this.props.result}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResultPane;
