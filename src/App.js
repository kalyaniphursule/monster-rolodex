import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchfield } = this.state;

    const filteredMonster = monsters.filter(m =>
      m.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={e => {
            this.setState({ searchfield: e.target.value });
          }}
        />
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
