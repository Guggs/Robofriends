import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Robot from '../models/robot';

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
    console.log('onSearchChange ',event.target.value);
    this.setState({searchfield: event.target.value})

  }

  render () {

    const {robots, searchfield} = this.state;
    console.log('render');

    const filterRobots = robots.filter(robot => {
      console.log(robot.name)
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return <div className="App">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <Cardlist robots={filterRobots}/>
            </Scroll>
            
          </div>
  }

  componentDidMount () {
    console.log('didMount');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users}));  
  }
}

export default App;
