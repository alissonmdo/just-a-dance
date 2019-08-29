import React from 'react'
import Card from './Card'
import styled from 'styled-components'

export default class Carousel extends React.Component {
  renderSingleCard(i) {
    return (
      <Card
        name={this.props.songs[i]['name']}
        artists={this.props.songs[i]['artists']}
        thumb={this.props.songs[i]['thumb']}
        handleClick={() => this.props.handleClick(this.props.songs[i]['video'])}
      />
    )
  }

  render() {
    return (
      <this.div.carousel className={'carousel full'}>
        {this.renderSingleCard(0)}
        {this.renderSingleCard(1)}
        {this.renderSingleCard(2)}
        {this.renderSingleCard(3)}
        {this.renderSingleCard(4)}
        {this.renderSingleCard(5)}
        {this.renderSingleCard(6)}
        {this.props.songs.forEach((data, index) => {
          this.renderSingleCard(index)
        })}
      </this.div.carousel>
    )
  }
  div = {
    carousel: styled.div`
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 10px;
      grid-auto-flow: column;
      grid-auto-columns: 300px;
      grid-auto-rows: 400px;
      justify-items: center;
      align-items: center;
      height: 400px;
      overflow-x: scroll;
      scroll-snap-type: x proximity;
      padding-bottom: calc(0.75 * 20px);
      margin-bottom: calc(-0.25 * 20px);
      &::before {
        content: '';
        width: 10px;
      }
      &::after {
        content: '';
        width: 10px;
      }
    `,
  }
}
