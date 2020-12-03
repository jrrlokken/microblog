import { Switch, Route, Redirect } from 'react-router-dom';
import NewPost from './NewPost';
import HomePage from './HomePage';
import Post from './Post';

const Routes = () => {
  <Switch>
    <Route exact to='/new'>
      <NewPost />
    </Route>
    <Route exact to="/">
      <HomePage />
    </Route>
    <Route exact to='/:postId'>
      <Post />
    </Route>
  </Switch>
}

export default Routes;