import React from 'react';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
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
          <Route exact path='/project1'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Project1 />
          </Route>
          <Route exact path='/project2'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Project2 />
          </Route>
          <Route exact path='/project3'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Project3 />
          </Route>
          <Route exact path='/project4'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Project4 />
          </Route>
          <Route exact path='/project5'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Project5 />
          </Route>
          <Route exact path='/skills'>
            <Header
              getClickFromMenu={this.getClickFromMenu}
              isChecked={this.state.isChecked}
            />
            <Skills />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
