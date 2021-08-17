import './App.css';
import Nav from './components/Nav';
import Lists from './components/Lists';
import Home from './components/Home';
import List from './components/List';
import { ListProvider } from './components/ListContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <ListProvider>
            <Nav />
            <Route path='/' exact component={Home} />
            <Route path='/lists' exact component={Lists} />
            <Route path='/list/:name' component={List}/>
          </ListProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
