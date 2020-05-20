import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {GlobalProvider} from './context/Globalstate'

import './App.css';
import {Homecomponent} from './components/Homecomponent'
import {Addcomponent} from './components/Addcomponent'
import {Editcomponent} from './components/Editcomponent'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
<Router>
 {/* Navigation */}
 <Switch>
       <Route path="/" component ={Homecomponent} exact />
       <Route path="/add" component ={Addcomponent}/>
       <Route path="/edit/:id" component ={Editcomponent}/>
 </Switch>
</Router>
      </GlobalProvider> 
      
    </div>
  );
}

export default App;
