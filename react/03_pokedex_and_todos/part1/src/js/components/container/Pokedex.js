import React, { Component } from "react";
import Pokemon from "../presentational/Pokemon";
import { render } from "react-dom";

const appStyle = {
  list: {
    listStyle: "none",
    display: "flex",
    // flexDirection: "row",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  h1: {
    textAlign: "center",
  },
};

export default class App extends Component {
  render() {
    var pokeList = this.props.pokemon.map(poke => {
      return (
        <Pokemon
          key={poke.id}
          name={poke.name}
          image={poke.image}
          type={poke.type}
        />
      );
    });
    return (
      <div id>
        <h1 style={appStyle.h1}>Pokedex</h1>
        <div id="list-cont">
          <ul style={appStyle.list}>{pokeList}</ul>
        </div>
        {console.log(pokeList)}
      </div>
    );
  }
}

App.defaultProps = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ],
};

const wrapper = document.querySelector("#pokedex");
render(<App />, wrapper);
