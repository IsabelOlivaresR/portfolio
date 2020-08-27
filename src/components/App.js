import React from 'react';
import Header from './Header';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.getClickFromMenu = this.getClickFromMenu.bind(this);
  }
  getClickFromMenu(ev) {
    this.setState((prevState) => {
      return {
        isChecked: !prevState.isChecked,
      };
    });
  }

  render() {
    console.log(this.state.isChecked);
    return (
      <div className='page'>
        <Header
          getClickFromMenu={this.getClickFromMenu}
          isChecked={this.state.isChecked}
        />
        <Home />
      </div>
    );
  }
}

export default App;
