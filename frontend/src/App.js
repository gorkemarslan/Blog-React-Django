import { Switch, BrowserRouter, Route} from 'react-router-dom'
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Home from './components/Home';
import Layout from './components/Layout';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/register' component={Signup} />
          <Route exact path='/posts' component={PostList} />
          <Route exact path='/posts/:slug' component={PostDetail}/>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
