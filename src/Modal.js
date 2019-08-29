import React from 'react'
import Player from './Player'

export default class Modal extends React.Component {
  showHideClassName() {
    return this.props.videoId ? 'modal display-block' : 'modal display-none'
  }
  render() {
    return (
      <div className={this.showHideClassName()}>
        <div className="player-controls">
          <button>Música Anterior</button>
          <button onClick={() => this.props.handleClick(null)}>
            Voltar ao menu
          </button>
          <button>Nova Música</button>
        </div>
        <Player videoId={this.props.videoId} />
      </div>
    )
  }
}
