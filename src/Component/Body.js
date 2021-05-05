import Home from './Home';
import DetailPage from './DetailPage';
import { Route, Switch } from 'react-router-dom';

const Body = () => {
  return (
    <div className='content'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/:id'>
          <DetailPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
