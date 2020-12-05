import { NavLink, Switch, Route } from 'react-router-dom';
import NewPost from './NewPost';
import HomePage from './HomePage';
import Post from './Post';
import './App.css';

const App = () => {
  return (
    <div className="App container">
      <header className="App-header jumbotron mt-2">
        <h1 className="App-title display-4">Microblog</h1>
        <p className="lead">A tiny blog.</p>
        <nav>
          <NavLink exact to='/'>Blog</NavLink>
          <NavLink exact to='/new'>Add a new post</NavLink>
        </nav>
      </header>
      
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/new'>
          <NewPost />
        </Route>
        <Route exact path='/:postId'>
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
