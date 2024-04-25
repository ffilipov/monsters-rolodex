import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      this.setState(
        () => {
          return { monsters: data };
        }, 
        () => {
          console.log(this.state.monsters);
        }
      );
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(
      () => {
        return { searchField };
      }
    );
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLowerCase().includes(searchField);
      }
    );

    return (
      <div className="App">
        <h1>Monsters:</h1>
      
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search monsters" 
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id} className="monster">
              <h2>{monster.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
