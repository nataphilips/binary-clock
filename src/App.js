import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateArr: [[],[],[],[],[],[]]
    }
  }

  componentDidMount() {
    setInterval(() => this.getTime(), 1000);
  }

  pad(n, size) {
    var s = String(n);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }

  getTime () {
    let date = new Date();
    let binaryTimeArr = date
      .toTimeString()
      .substring(0, 8)
      .split(":")
      .join("")
      .split("")
      .map(x => parseInt(x, 10)
        .toString(2))
      .map(x => this.pad(x, 4));
    this.setState({dateArr: binaryTimeArr})
  }


  render() {
    return (
      <AppBody>
        <ClockContainer>
          <Number>
            <Digit>
              <Dot on={this.state.dateArr[0][0] === '1'} />
              <Dot on={this.state.dateArr[0][1] === '1'} />
              <Dot on={this.state.dateArr[0][2] === '1'} />
              <Dot on={this.state.dateArr[0][3] === '1'} />
            </Digit>
            <Digit>
              <Dot on={this.state.dateArr[1][0] === '1'} />
              <Dot on={this.state.dateArr[1][1] === '1'} />
              <Dot on={this.state.dateArr[1][2] === '1'} />
              <Dot on={this.state.dateArr[1][3] === '1'} />
            </Digit>
          </Number>
          <Number>
            <Digit>
              <Dot on={this.state.dateArr[2][0] === '1'} />
              <Dot on={this.state.dateArr[2][1] === '1'} />
              <Dot on={this.state.dateArr[2][2] === '1'} />
              <Dot on={this.state.dateArr[2][3] === '1'} />
            </Digit>
            <Digit>
              <Dot on={this.state.dateArr[3][0] === '1'} />
              <Dot on={this.state.dateArr[3][1] === '1'} />
              <Dot on={this.state.dateArr[3][2] === '1'} />
              <Dot on={this.state.dateArr[3][3] === '1'} />
            </Digit>
          </Number>
          <Number>
            <Digit>
              <Dot on={this.state.dateArr[4][0] === '1'} />
              <Dot on={this.state.dateArr[4][1] === '1'} />
              <Dot on={this.state.dateArr[4][2] === '1'} />
              <Dot on={this.state.dateArr[4][3] === '1'} />
            </Digit>
            <Digit>
              <Dot on={this.state.dateArr[5][0] === '1'} />
              <Dot on={this.state.dateArr[5][1] === '1'} />
              <Dot on={this.state.dateArr[5][2] === '1'} />
              <Dot on={this.state.dateArr[5][3] === '1'} />
            </Digit>
          </Number>
        </ClockContainer>
      </AppBody>
    );
  }
}
const Flex = styled.div`
  display: flex;
`
const AppBody = styled(Flex)`
  text-align: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #27272C;
  justify-content: center;
  align-items: center;
`
const ClockContainer = styled(Flex)`
  width: 40vh;
  height: 13vh;
  justify-content: center;
  align-items: center;
`
const Dot = styled(Flex)`
  height: 15px;
  width: 15px;
  margin: 2px;
  background-color:#525252;
  border-radius: 50px;
  flex-direction: row;
  ${props => props.on && `
    background-color: #48d8b8;
    height: 17px;
    width: 17px;
    margin: 1px;
    transition: 0.3s ease-in;
  `}
`
const Number = styled(Flex)`
  height: 100%;
  width: 45%;
  justify-content: center;
  align-items: center;
`
const Digit = styled(Flex)`
  height: 100%;
  width: 25%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

export default App;
