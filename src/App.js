import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import VideoForum from './components/videoforum';
import VideoQuiz from './components/videoquiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{minHeight: '50em'}}>
            <Switch>
              <Route path="/" exact component={VideoForum}></Route>
              <Route path="/quiz" component={VideoQuiz}></Route>
            </Switch>
        </div>
      </Router>


    </div>

  );
}

export default App;
