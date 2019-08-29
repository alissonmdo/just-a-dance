import React from 'react'
import Youtube from 'react-youtube'
import styled from 'styled-components'

const MyYoutube = styled(Youtube)`
  position: fixed;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 0px 30px black;
`
export default class Player extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
  render() {
    const opts = {
      playerVars: {
        autoplay: 1,
        controls: 0,
      },
    }
    return (
      <MyYoutube
        className="player"
        videoId={this.props.videoId}
        opts={opts}
        allowfullscreen
        style={{
          display: 'none',
        }}
      />
    )
  }
}
