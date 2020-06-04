import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Summary extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                id="txtSummary"
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

export default Summary;
