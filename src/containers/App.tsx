import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Robot from '../models/robot';
import ErrorBoundry from './ErrorBoundry';

interface Props {
}

interface State {
  robots: Robot[],
  searchfield: string
}

class App extends React.Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.state = {
      robots:[],
      searchfield: ''
    }
  }

  onSearchChange = (event: React.ChangeEvent<{value: string}>) => {
    this.setState({searchfield: event.target.value})

  }

  render () {

    const {robots, searchfield} = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return <div className="App">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <Cardlist robots={filterRobots}/>
              </ErrorBoundry>
              
            </Scroll>
            
          </div>
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users}));  
  }
}

export default App;
