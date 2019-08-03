import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit(event) {
    event.preventDefault();

    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// Stephengrider.github.io/playgrounds/

// Solution 1 (bind)

// class Car {
// constructor() {
//   this.drive = this.drive.bind(this);
// }

//   setDriveSound(sound){
//     this.sound = sound;
//   }

//   drive() {
//     return this.sound;
//   }
// }

// const car = new Car();
// car.setDriveSound('vroom');

// const drive = car.drive;

// drive()
