import './App.css';
import Comic from './pages/Comic';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Error from './pages/Error'
import MarvelComic from './pages/MarvelComic';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='contain-cards'>
          <Switch>
            {/* <Route exact path="/" component={Comic} /> */}
            <Route exact path="/" component={MarvelComic} />

            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
