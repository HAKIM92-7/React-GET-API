import React from 'react';
import { Link, Route ,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import Posts from './components/Posts';
import Comments from './components/Comments';






function App() {
  
  return (
    
        <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Users</Link></li>
            
           

          </ul>
        </nav>

          <Switch>
          <Route  exact={true} path="/" component={UserList}/>
          <Route path="/posts/:id" component={Posts}/>
          <Route path="/comments/:id" component={Comments}/>
         
          </Switch>
      </div>
    

  );
}

export default App;
