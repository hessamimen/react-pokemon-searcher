import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
state = {
  imgSrc: this.props.front
}

imgBack = () => {
  this.setState({
    imgSrc: this.props.back
  })
}
imgFront = () => {
  this.setState({
    imgSrc: this.props.front
  })
}
  
  render() {
    return (
      // <Card onMouseEnter={()=> this.imgBack()} onMouseLeave={()=> this.imgFront()}  >
      <Card onClick={this.state.imgSrc === this.props.front ? this.imgBack : this.imgFront}  >
        <div>
          <div className="image">
            <img src={this.state.imgSrc} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
