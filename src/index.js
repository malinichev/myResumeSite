
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './compounents/app';
import ErrorBoundry from './compounents/err-boundry';

import MyContext from './services/context';
import useDataApi from './services/useDataApi.js';

  

ReactDOM.render( 

    <ErrorBoundry>
            < MyContext.Provider value={useDataApi}>   {/* //закладываем в КОНТЕНТ Функцию для получения DATA по АПИ  */}
                <Router>
                    <App/>
                </Router>
            </ MyContext.Provider>
    </ErrorBoundry>,
    document.getElementById('root'));



