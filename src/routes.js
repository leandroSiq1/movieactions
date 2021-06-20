import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
 
import Home from './pages/Home';
import Saves from './pages/Saves';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/saves">
          <Saves />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;