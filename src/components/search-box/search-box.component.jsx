import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={ this.props.className }
          placeholder={ this.props.placeholder }
          onChange={ this.props.onChangeHandler }
        />
      </div>
    );
  }
}

export default SearchBox;