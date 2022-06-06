import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }
  fetchData = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({
      pokemons: data,
      searchTerm: ''
    }))
  }
  componentDidMount(){
    this.fetchData()
  }

  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] })
  }
  render() {
    const requestedPokemon = this.state.pokemons.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm)
      )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection pokemon={requestedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
