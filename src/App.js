import React from 'react'
import Carousel from './Carousel'
import Songs from './Songs'
import Modal from './Modal'
import Logo from './SVG/just-a-dance-logo.svg'
import styled from 'styled-components'

const LogoA = styled.img`
  height: 18vh;
  justify-self: center;
  margin: 5vh;
  transition: 'all, linear, .5s';
  &:hover {
    height: 20vh;
  }
`
const MyApp = styled.div`
  .app-container {
    display: grid;
    grid-template-columns: 20px 1fr 20px;
  }
  .app-container > * {
    grid-column: 2/-2;
  }
  .app-container > .full {
    grid-column: 1/-1;
  }
  .app-container .app-title {
    display: none;
  }

  .app-dev {
    justify-self: center;
    vertical-align: bottom;
    align-self: flex-end;
  }
`
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVideo: null,
    }
  }

  handleVideoSelect(video) {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <MyApp className="app">
        <div className="app-container">
          <h1 className="app-title">Just a Dance</h1>
          <LogoA
            className="app-logo"
            src={Logo}
            alt="Just A Dance Logo"
            // style={logoStyles}
          />
          <Carousel
            songs={Songs}
            handleClick={i => this.handleVideoSelect(i)}
          />
          <p className="app-dev">
            Made with <span role="img">❤</span> in <span role="img">🇧🇷</span> by
            Alisson.dev
          </p>
        </div>
        <Modal
          videoId={this.state.selectedVideo}
          handleClick={i => this.handleVideoSelect(i)}
        />
      </MyApp>
    )
  }

  component = {
    logo: styled.img`
      height: 18vh;
      justify-self: center;
      margin: 5vh;

      &:hover {
        height: 20vh;
      }
    `,
  }
}

export default App
