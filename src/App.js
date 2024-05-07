import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField ] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(data => setMonsters(data));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box" 
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
