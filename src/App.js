import React, { Component } from "react";
import "./App.css";

import Control from "./components/control";
import { Container, Row, Col } from "react-bootstrap";
import ResultPane from "./components/resultpane";
import Summary from "./components/summary";

class App extends Component {
  state = {
    result: "",
    expression: "",
    summary: "",
    resetFlag: false,
    pointFlag: false,
    equalsFlag: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("load", this.load);
    window.addEventListener("keypress", this.handleKeyPress);
  }

  load = () => {
    this.handle0ControlClick();
  };

  handleKeyPress = (event) => {
    switch (event.key) {
      case "0":
        this.handle0ControlClick();
        break;

      case "1":
        this.handle1ControlClick();
        break;

      case "2":
        this.handle2ControlClick();
        break;

      case "3":
        this.handle3ControlClick();
        break;

      case "4":
        this.handle4ControlClick();
        break;

      case "5":
        this.handle5ControlClick();
        break;

      case "6":
        this.handle6ControlClick();
        break;

      case "7":
        this.handle7ControlClick();
        break;

      case "8":
        this.handle8ControlClick();
        break;

      case "9":
        this.handle9ControlClick();
        break;

      case ".":
        this.handlepointControlClick();
        break;

      case "+":
        this.handleplusControlClick();
        break;

      case "-":
        this.handleminusControlClick();
        break;

      case "*":
        this.handlemultiplyControlClick();
        break;

      case "/":
        this.handledivisionControlClick();
        break;

      case "=":
        this.handleequalControlClick();
        break;
    }
  };

  handle0ControlClick = () => {
    this.setResultValue({ value: "0" });
  };

  handle1ControlClick = () => {
    this.setResultValue({ value: "1" });
  };

  handle2ControlClick = () => {
    this.setResultValue({ value: "2" });
  };

  handle3ControlClick = () => {
    this.setResultValue({ value: "3" });
  };

  handle4ControlClick = () => {
    this.setResultValue({ value: "4" });
  };

  handle5ControlClick = () => {
    this.setResultValue({ value: "5" });
  };

  handle6ControlClick = () => {
    this.setResultValue({ value: "6" });
  };

  handle7ControlClick = () => {
    this.setResultValue({ value: "7" });
  };

  handle8ControlClick = () => {
    this.setResultValue({ value: "8" });
  };

  handle9ControlClick = () => {
    this.setResultValue({ value: "9" });
  };

  handlepointControlClick = () => {
    if (this.state.pointFlag === false) {
      this.setResultValue({ value: "." });
      this.setState({ pointFlag: true });
    }
  };

  handleplusControlClick = () => {
    this.setSummary({ operator: "+" });
  };

  handleminusControlClick = () => {
    this.setSummary({ operator: "-" });
  };

  handlemultiplyControlClick = () => {
    this.setSummary({ operator: "*" });
  };

  handledivisionControlClick = () => {
    this.setSummary({ operator: "/" });
  };

  handleequalControlClick = () => {
    this.setSummary({ operator: "=" });
    this.setState({ value: "" });
    this.setState({ equalsFlag: true });
  };

  //handle by operands
  setResultValue = (args) => {
    if (this.state.equalsFlag !== true) {
      if (this.state.resetFlag === true) {
        if (args.value === ".") {
          this.setState({ result: "0" + args.value });
        } else {
          this.setState({ result: args.value });
        }
        this.setState({ resetFlag: false });
      } else {
        this.setState({ result: this.state.result + args.value });
      }
    }
  };

  //handled by operators
  setSummary = (args) => {
    let result = this.evaluateResult();
    if (this.state.resetFlag === false) {
      this.evaluateExpression(result, args);

      let summary = this.state.summary + result + args.operator;
      this.setState({ summary: summary });
      this.setState({ resetFlag: true });
    } else {
      let summaryLen = this.state.summary.length;
      let summary =
        this.state.summary.substr(0, summaryLen - 1) + args.operator; //remove tail character =.-,* or / with the latest operator given by user
      this.setState({ summary: summary });
      this.setState({ expression: summary });
    }
    this.setState({ pointFlag: false });
    this.setState({ equalsFlag: false });
  };

  //executes the eval expression to get the result
  evalSummary = (args) => {
    let exprLen = args.expression.length;
    let evalSummary = args.expression.substr(0, exprLen - 1);
    evalSummary = eval(evalSummary);
    this.setResult({ evalSummary });
  };

  setResult = (args) => {
    this.setState({ result: args.evalSummary });
  };

  //set the coined expression to state variable
  evaluateExpression(result, args) {
    let expression = this.coinExpression(result, args);
    this.setState({ expression: expression });
    this.evalSummary({ expression: expression });
  }

  //In order to maintain the order procedence of operator we are placing lowest order precedence with '(' and ')' brackets in order to maintain evaluation from left to right
  coinExpression(result, args) {
    let expression = this.state.expression + result + args.operator;
    if (args.operator === "/" || args.operator === "*") {
      expression =
        "(" + expression.substr(0, expression.length - 1) + ")" + args.operator;
    }
    return expression;
  }

  //leading Zero will not be supported to evaluate expression in react and so we are removing the leading zero from this function to the result
  evaluateResult() {
    let result = "";
    let leadingZero = "";
    let resultLen = this.state.result.length;
    if (resultLen > 0) {
      leadingZero = this.state.result.substr(0, 1);
    } else {
      result = this.state.result;
    }
    if (leadingZero === "0" && resultLen > 1) {
      result = this.state.result.substr(1, resultLen);
    } else {
      result = this.state.result;
    }
    return result;
  }

  render() {
    return (
      <div id="calcContainer">
        <Container>
          <Row>
            <Col>
              <Summary result={this.state.summary} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <ResultPane result={this.state.result} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Control
                on0ControlClick={() => this.handle0ControlClick()}
                on1ControlClick={() => this.handle1ControlClick()}
                on2ControlClick={() => this.handle2ControlClick()}
                on3ControlClick={() => this.handle3ControlClick()}
                on4ControlClick={() => this.handle4ControlClick()}
                on5ControlClick={() => this.handle5ControlClick()}
                on6ControlClick={() => this.handle6ControlClick()}
                on7ControlClick={() => this.handle7ControlClick()}
                on8ControlClick={() => this.handle8ControlClick()}
                on9ControlClick={() => this.handle9ControlClick()}
                onpointControlClick={() => this.handlepointControlClick()}
                onplusControlClick={() => this.handleplusControlClick()}
                onminusControlClick={() => this.handleminusControlClick()}
                onmultiplyControlClick={() => this.handlemultiplyControlClick()}
                onequalControlClick={() => this.handleequalControlClick()}
                ondivisionControlClick={() => this.handledivisionControlClick()}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
