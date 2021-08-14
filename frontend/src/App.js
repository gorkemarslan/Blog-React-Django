import { Switch, BrowserRouter, Route} from 'react-router-dom'
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Home from './components/PostDetail';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={PostList} />
          <Route eaxct path='/posts/:slug' component={PostDetail}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
