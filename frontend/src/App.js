import { Switch, BrowserRouter, Route} from 'react-router-dom'
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Home from './components/Home';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/posts' component={PostList} />
          <Route path='/posts/:slug' component={PostDetail}/>
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
