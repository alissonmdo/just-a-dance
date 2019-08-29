import React from 'react'
import styled from 'styled-components'

export default class Card extends React.Component {
  listArtists(artists) {
    if (!artists) return
    var artist = artists[0]
    if (artists.length > 1)
      for (let i = 1; i < artists.length; i++) {
        artist = artists + ', ' + artists[i]
      }
    return artist
  }

  render() {
    return (
      <this.c.card className="card" onClick={() => this.props.handleClick()}>
        <this.c.details className="card-details">
          <this.c.title className="card-title">{this.props.name}</this.c.title>
          <p className="card-artist">{this.listArtists(this.props.artists)}</p>
        </this.c.details>
      </this.c.card>
    )
  }

  c = {
    card: styled.div`
      width: 300px;
      height: 300px;
      border: 5px solid white;
      overflow: hidden;
      position: relative;
      transition: all, ease, 0.3s;
      background-image: url(${this.props.thumb});
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        box-shadow: 0 0 30px 0 white;
        width: 350px;
        height: 350px;
        z-index: +1;
        > .card-details {
          top: 275px;
        }
      }
      &:active {
        z-index: -1;
      }
    `,
    details: styled.div`
      transition: all, ease, 0.3s;

      background: white;
      height: 75px;
      top: 225px;
      position: relative;
      font-weight: bold;
      padding: 5px;
    `,
    title: styled.p`
      text-transform: uppercase;
      font-size: 1.2em;
      padding-bottom: 5px;
    `,
  }
}
