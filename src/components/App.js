import React from 'react';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Home />
          </Route>
          <Route exact path='/aboutme'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <AboutMe />
          </Route>
          <Route exact path='/projects'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Projects />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
