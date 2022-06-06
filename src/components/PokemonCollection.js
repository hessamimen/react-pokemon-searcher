import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {

    // console.log(this.props.pokemon)
    return (
      <Card.Group itemsPerRow={6}>
      {this.props.pokemon.map(pokemon => (
        <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} front={pokemon.sprites.front} back={pokemon.sprites.back} />
      ))}
        
      </Card.Group>
    )
  }
}

export default PokemonCollection
