import { Component } from "react";

class CardList extends Component {
  
  render() {
    const { monsters } = this.props;
    
    return (
      <div>
        {monsters.map((monster) => (
          <div key={monster.id} className="monster">
            <h2>{monster.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
