import React, {

  useContext
} from 'react';


import {Route, Switch} from 'react-router-dom';

import './app.scss';

import MyContext from '../../services/context';

import HomePage from '../pages/home-page';
import CatalogPage from '../pages/catalog-page';
import ItemInCatalogPage from '../pages/item-In-catalog-page';



const App = ()=> {
  const useDataApi = useContext(MyContext);
  

  const [state, doFetch] = useDataApi();
  //  console.log(data);
    return (
        <Switch>
            <Route
                path='/'
                component={()=><HomePage doFetch={doFetch} data={state} />}
                exact />
            <Route
              path='/catalog'
              component={()=><CatalogPage doFetch={doFetch} catDat={state} />}
              exact
              />
            <Route
                path='/catalog/:catname'
                component={()=><ItemInCatalogPage doFetch={doFetch} catDat={state} />}
                exact
                 />
           
            
        </Switch>
    );
}

export default App