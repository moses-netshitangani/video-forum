import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Lesson from './components/lesson';
import './App.css';

function App() {

  return (
    <div className="App">
      
      <Router>
        <div style={{minHeight: '50em'}}>
            <Switch>
              <Route path="/" exact component={Lesson}></Route>
              {/* <Route path="/stats" component={Stats}></Route>
              <Route path="/setup" component={Admin}></Route> */}
            </Switch>
        </div>
      </Router>

    </div>

  );
}

export default App;
