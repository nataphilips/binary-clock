import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "hard",
    }
  }


  render() {
    return (
      <AppBody>
        <header>
          Binary Clock
        </header>
        <ClockContainer>
          <Number>
            <Digit>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
            </Digit>
            <Digit>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
            </Digit>
          </Number>
          <Number>
            <Digit>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
            </Digit>
            <Digit>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
            </Digit>
          </Number>
          <Number>
            <Digit>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
            </Digit>
            <Digit>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
              <Dot>
              </Dot>
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
`
const ClockContainer = styled(Flex)`
background-color: grey;
width: 100%;
height: 100%;
padding: 200px;
`
const Dot = styled(Flex)`
  height: 15px;
  width: 15px;
  margin: 5px;
  border-radius: 50px;
  border: 5px solid black;
  flex-direction: row;
`
const Number = styled(Flex)`
  height: 185px;
  width: 200px;
  margin: 15px;
  border: 5px solid black;
`
const Digit = styled(Flex)`
  height: 160px;
  width: 80px;
  margin: 5px;
  border: 5px solid black;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 2px 10px;
  justify-content: center;
`

export default App;
